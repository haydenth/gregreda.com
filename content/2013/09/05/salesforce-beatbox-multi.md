Title: Bulk Updating Records in Salesforce (with beatbox)
Date: 2013-09-05
Slug: salesforce-beatbox-multi
Tags: salesforce, python, beatbox
Icon: fa-cloud
Abstract: I talk about how to use python's beatbox module to bulk update a bunch of records at the same time.

In a [previous post](|filename|../../08/04/salesforce-beatbox.md), I went over some basic salesforce / beatbox basics: how to use beatbox, how to run SOQL queries, and how to update/delete records via the API. Since then, I got a question (I love questions) - is there a way to do a bulk update of many records at the same time using beatbox? The answer: Yes (but you need to make the data structures nice).

The Basics - Moving Single Records to SF
------------------
Recall how we pushed it to Salesforce as a single row:
```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials

object_dict = {'Name': 'Sample Account', 'Type': 'Account', 'Id': 'SFACCOUNTID'}
results = service.update(object_dict)
print results
```

We just called 
```
service.update(object_dict)
```

This makes a call to the Salesforce API with the python dictionary that has the elements of the Salesforce record you're interested in. The folks that built the beatbox API were particularly keen and allowed this method to accept a single dictionary or a **list of dictionaries**. This is best shown by example:

```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials

object1_dict = {'Name': 'Sample Account', 'Type': 'Account', 'Id': 'SFACCOUNTID'}
object2_dict = {'Name': 'Bozos Car Factory', 'Type': 'Account', 'Id': 'SFACCOUNTID2'}
list_of_objects = [object1_dict, object2_dict]
results = service.update(list_of_objects)
print results
```

Aawwwww snap! If we pass it the list of object dictionaries, the API takes them all and updates them accordingly. The output from the above looks like:

```
thayden$ python multi_sf_test.py 
[{'errors': [], 'id': 'SFACCOUNTID', 'success': True}, {'errors': [], 'id': 'SFACCOUNTID2', 'success': True}]
```


Importing from CSV
-----------------
The most common use case for this type of stuff is the following: Suppose you extracted some data from Salesforce into an Excel file, manipulated the data, and now want to reload it back using the API. If you save from Excel to CSV, you'll end up with a file that looks like (for example):

```
salesforce_id, first_name, last_name, some_custom_field
SFACCOUNTID1, Tom, Hayden, 10
SFACCOUNTID2, Wilson, Wilson, 2
SFACCOUNTID3, Unknown, Batman, 30

```

Python has a really awesome csv module that you can use to read the file directly into a dictionary. Here's a quick implementation of the above file, loaded into python:

```
import csv

CSVFILE = 'testcsv.csv'
FIELDS = ['salesforce_id', 'first_name', 'last_name', 'custom_field']

file_handler = open(CSVFILE, 'r')
next(file_handler)  # skip the header in the file
csv_reader = csv.DictReader(file_handler, FIELDS, delimiter=',')

# the rows variable is a list of dictionaries!
# this is a clever trick to take all the lines
# into a dictionary of dictionaries
rows = list(csv_reader)

# you can, for example, print the 3rd row
# remember: the array starts at 0
print rows[2]

# or the first_name field in that row
print rows[2]['first_name']
```

Note that we do a little trick where we take all of the lines in the csv and put it into a dict (putting a bunch of dictionaries into a list):
```
rows = list(csv_reader)
```

This is basically the same as doing:
```
rows = []
for line in csv_reader:
  rows.append(line)
```

It just looks cleaner and is probably more "pythonic".

Putting the Parts Together
-------------
OK! Now let's take the stuff we know about reading CSVs and the stuff we know about doing a service.update() call into Salesforce to load data from a CSV -> Salesforce. We can actually cheat a little bit to make this easier by making the dictionary keys (the FIELDS variable) match up to Salesforce's dictionary definitions. Here's the code:


```
import csv
import beatbox

CSVFILE = 'testcsv.csv'
FIELDS = ['id', 'firstname', 'lastname', 'custom_field__c']  #these now match SF!
SALESFORCE_TYPE = 'Account'  # type of SF object you're manipulating

# connect to our salesforce instance
service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials

# open the file
file_handler = open(CSVFILE, 'r')
next(file_handler)  # skip the header in the file
csv_reader = csv.DictReader(file_handler, FIELDS, delimiter=',')

# go through each line, add in a new key,value pair
# for the SF object type (its required by SF) and build this big list
# of dictionaries called rows
rows = []
for line in csv_reader:
  line['type'] = SALESFORCE_TYPE  # salesforce requires the type field
  rows.append(line)

# hand off the list of dictionaries to SF
results = service.update(rows)
print results
```

If it fails, Salesforce is usually pretty good about telling you a reason for why it failed. Usually it's because you're passing it either too many fields or not enough (ie you're missing a required field). You might have to play around a little bit with your loop to either add or remove fields. Like, if custom_field__c wasn't a real SF field, you could do something like:
```
rows = []
for line in csv_reader:
  line['type'] = SALESFORCE_TYPE  # add the type = Account element
  del line['custom_field__c']  # delete the custom_field__c element
  rows.append(line)
```

Title: Accessing Salesforce via Python
Date: 2013-08-04
Slug: salesforce-python
Icon: icon-cloud
Abstract: I talk about how to use python's beatbox module to access Salesforce (via SOAP API calls and via SOQL Queries)

I've been asked a few times in my career to help extract data to/from Salesforce. It's not a sexy job but someone has to do it and their SOAP API actually *isn't as bad as you might think*. Even better there is a great python module, [beatbox](https://pypi.python.org/pypi/beatbox) which lets you make calls via the API and run queries. Some of the stuff I post about here is in their documentation already and I'm just repeating it here for completeness.

## SOQL

The first thing a developer will ask when accessing Salesforce is -  how can I query directly against the database? Is there a SQL layer? The answer to this is *sort of*. There is no real-time database you can login to and run queries. However, the guts of Salesforce are structured in a relational way and you can throw a query against their API and get results back, using their SQL-like language SOQL (I pronounce it *soh-quill*, I have no idea how it's supposed to be pronounced). 

Below is a simple query using beatbox that just returns a list of Ids and Names from your Account object. 
```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials
query_result = service.query("SELECT Id, Name FROM Account")
records = query_result['records']  # dictionary of results!
```

So, here's where it gets a little weird. The above code will only give you 500 rows - in order to get the full set, you have to loop through, pulling 500 rows at a time (using queryMore method) until you get the full set. Here's how the code looks now:
```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials
query_result = service.query("SELECT Id, Name FROM Account")
records = query_result['records']  # dictionary of results!
total_records = query_result['size']  # full size of results

# loop through, pulling the next 500 and appending it to your records dict
while query_result['done'] is False and len(records) < total_records:
  query_result = self._service.queryMore(query_locator)
  query_locator = query_result['queryLocator']  # get the mystical queryLocator
  records = records + query_result['records']  # append to records dictionary
```
Now, when this finishes you should have *all* of the records from your Account table. Note that there is no error catching on this, so if it fails for some reason; you're out of luck. I suggest building in some kind of try and catch loop, since the Salesforce API can be periodically spotty.

## Creating or Modifying Objects Directly

So you can create, modify, delete and update objects directly through the API without needing the query language. The beatbox module makes this super easy (almost too easy!). Here's a quick example of all three operations - in both cases, you construct a dictionary with the object's attributes and just pass them to the object. 

Make an Account (this works for almost all types of objects, just change the Type dictionary element):
```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials

object_dict = {'Name': 'Sample Account', 'Type': 'Account'}
results = service.create(object_dict)
print results

```

Update an account. Suppose, you want to update details on an existing account - just plop the account ID into the object dictionary and call the update method and voila!
```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.login('your_username', 'your_password')  # login using your sf credentials

object_dict = {'Name': 'Sample Account', 'Type': 'Account', 'Id': 'SFACCOUNTID'}
results = service.update(object_dict)
print results
```

You can also delete accounts and do other operations - the best place to look is the [beatbox code on github](https://github.com/superfell/Beatbox/blob/master/beatbox.py) to see the full list of available method.

## Testing & Sandbox Accounts

By default, Beatbox will go straight to your production Salesforce instance. Since most Salesforce users just go straight to production anyway, this probably isn't a big deal. However, if you have a sandbox or testing instance, you can easily modify your code to use that SOAP endpoint. Just change a constant like below

```
import beatbox

service = beatbox.PythonClient()  # instantiate the object
service.serverUrl = self.SANDBOX_URL = 'https://test.salesforce.com/services/Soap/u/20.0'
service.login('your_username', 'your_password')  # login using your sf credentials

## do your SOQL or whatever now


```

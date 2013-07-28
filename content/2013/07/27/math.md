Title: MathJax & LaTeX
Date: 2013-07-27
Slug: math
Icon: icon-plus
Abstract: I talk about how I got math to work on my website via LaTeX + MathJax Javsacript library. It is super easy.

Since I have this new awesome blog now, I want to be able to occasionally share math equations or post about proofs. Therefore, I need some kind of LaTeX based tool to show equations. This used to be a huge pain in the ass - you would write the equations, compile it using a huge gigabyte sized LaTeX package and then have to copy the images of the equations to display. Yuck.

Fortunately, there exists [MathJax](http://www.mathjax.org). It is a sweet javascript library for rendering math. All I had to do was throw the following into my html template and I can then embed math *right into the page*

```
    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
    </script>
    <script type="text/javascript" 
      src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
    </script>
```
So then, when I am putting together a post, I just write something like
```
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```

And it renders it like:
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

We are in the future, you guys.

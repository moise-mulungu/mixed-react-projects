# anatomy of a URL

DM: discuss each part of the URL briefly here; (note: "slug" is a bit specific, so it may not appear in all anatomies of a URL)
DM: move the image file into this directory; make reference to it here;
DM: that image is good, but search again, and find an image that has more detail/more parts.

## url

A `Uniform Resource Locator`, colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. A URL is a specific type of Uniform Resource Identifier, although many people use the two terms interchangeably.

## protocol

The protocol, also known as the `scheme`, is the first part of a URL. It represents the sets of rules that decide how files are displayed, formatted, or transferred across the web. For example, when an address is entered in the browser, the http part , which stands for `hypertext transfer protocol`, tells it that the page is to be displayed in hypertext format (HTML). Other protocols include the file `transfer protocol` (ftp) for transferring files and single mail transfer protocol (SMTP) for used by mail servers to send emails. By the way, https is the secure version of http.

## subdomain

The subdomain. The most common subdomain is `www` which a general symbol for any resource on the web. However, it is common to specify the type of resource that the browser should deliver.

## domain

The domain name is the actual name of the website. The `medium` in `medium.com` or `google` in `google.com`. Domain names must be unique as they literally determine the address of a website. In the early days of the web, you actually had to type the IP address to go to a particular site. Later on, words were used instead as they were easier to remember.

## top-level domain

The `top level domain` (TLD) is also known as the `domain extension`. It is the `com` that appears at the end of simple websites addresses like `bing.com`. This part specifies what kind of content will be on the website. `.com` was primarily used for commercial sites (although today it’s used to indicate any website), whereas `.org` is usually used to indicate that the website is that of an organization. When it comes to buying a domain, the domain extension can decide how expensive it is. For instance, `.vegas` tends to be more expensive than `.com` or `.net`.

## port

The port is a reserved channel used for specific purposes. Different types of servers will use different ports. Web server ports differ from file server ports, for instance. The default port for `standard HTTP servers is 80`, whereas secure websites use HTTPS which requires `port number 443`. Browsers are required to connect to a particular port in order to access the resources on that server.

## path

The path used to show which directory on server stores the resources (files, videos, audio, etc.) that are being requested. Nowadays, the path that appears in most URLs these days don’t forcibly reflect the directory structure on the server. Instead, paths are used to identify a route in the navigational structure of the website. For example, when you edit a page on Medium, the path structure is https://medium.com/p/some_number/edit. The term ‘edit’ in the URL indicates that this is the page where you edit your blogs. In the URL above, the path has something to do with playing a video, hence ‘videoplay’.

## query

The query. Many times when searching on a website or search engine, you’ll see a `question mark` in the URL of the page that display your results. On google.com, if you search for keyword, you’ll see a ‘/search?’ added after the ‘.com’. The question mark tell the browser that a query is being performed against a database where the data is stored.

## parameters

The parameters are the actual values being queried when a search is performed. The parameter can be search term, a number, an encrypted value or any other data that can be found on the database. Copy and paste the following address to your browser’s address bar to see shoes.

## fragment

Finally, the fragment, is an optional component of a web address that is preceded by a hash and that directs to a secondary resources, which can a portion of a page like a footer or sidebar. Often times, the fragment will be an id attribute of an HTML element.

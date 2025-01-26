I wanted to keep this API as simple as possible while also maintaining what was asked in the project requirements and a level of 
organization. My thought process is as follows:


**books.js**

  Simply a mutable list of books that can be edited by API calls in server.js.

  
**utility.js** 

  Contains helper functions used for necessary data checking practices like checking parameter format(min, max, duration validity, etc).
  If this was connected to an actual DB, the main function to update our store of data wouldn't be in this file. I found it appropriate just because this
  API isn't dealing with data that is very complex. 

  
**server.js**

  All API endpoints reside in this file as per the project requirements. I kept the code as simplistic and readable as I could to the best
  of my ability, and commented where I thought necessary.

  

**Some improvements I can think of for a production scale API**:
- Assuming a sorted array of data and a _much_ larger dataset, using Binary Search when performing GET requests for a specific book would be 
  ideal since it's faster than JS' built-in linear search(O(n) vs O(log(n))).
- For a more robust solution to the user, it would be beneficial to make it so that user's can define a minimum or maximum price only when search for
  books within a price range.
- Authentication and Authorization to control user access to the API, should the data be sensitive. At rest and in-transit encryption, etc. 

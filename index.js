import dotenv from "dotenv";
import * as Carousel from "./Carousel.js";
import axios from "axios";
dotenv.config();

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = process.env.CATS_URI;

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

async function initialLoad() {
  try {
    // URL for retrieving cat breeds
    const apiUrl = "https://api.thecatapi.com/v1/breeds";

    // Fetch the data from the Cat API
    const response = await fetch(apiUrl, {
      headers: {
        // Including my API key in the request headers
        "x-api-key": API_KEY,
      },
    });

    // Checking if the response is not good
    if (!response.ok) {
      // Throw an error if the fetch request failed
      throw new Error("Can not find cat breeds");
    }

    // Parse the JSON response to get list of cat breeds
    const breeds = await response.json();

    // Looping through each breed
    breeds.forEach((breed) => {
      // Creating a new <option> element for each breed
      const option = document.createElement("option");
      // Setting the value of the option to the breed's id
      option.value = breed.id;
      // Setting the breed's name to dispaly text option
      option.textContent = breed.name;
      // Append the option to the breedSelect dropdown
      breedSelect.appendChild(option);
    });

    // ERRAWR handling
  } catch (err) {
    console.error(err, 'This is an ERRAWR!!! I am Reptar, here me Rawr! ');
  }
}
initialLoad();
  /**
   * 2. Create an event handler for breedSelect that does the following:
   * - Retrieve information on the selected breed from the cat API using fetch().
   *  - Make sure your request is receiving multiple array items!
   *  - Check the API documentation if you're only getting a single object.
   * - For each object in the response array, create a new element for the carousel.
   *  - Append each of these new elements to the carousel.
   * - Use the other data you have been given to create an informational section within the infoDump element.
   *  - Be creative with how you create DOM elements and HTML.
   *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
   *  - Remember that functionality comes first, but user experience and design are important.
   * - Each new selection should clear, re-populate, and restart the Carousel.
   * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
   */

  async function breedSelectInfo(breedId) {
    try {
      const apiUrl = ''; // TODO: add url
      const response = await fetch(apiUrl, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      
    } catch (err) {
      console.error(err);
    }
    
  }

  // breedSelect.addEventListener()

  /**
   * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
   */
  /**
   * 4. Change all of your fetch() functions to axios!
   * - axios has already been imported for you within index.js.
   * - If you've done everything correctly up to this point, this should be simple.
   * - If it is not simple, take a moment to re-evaluate your original code.
   * - Hint: Axios has the ability to set default headers. Use this to your advantage
   *   by setting a default header with your API key so that you do not have to
   *   send it manually with all of your requests! You can also set a default base URL!
   */

  // async function initialLoad() {
  //   try {
  //     // URL for retrieving cat breeds
  //     const apiUrl = "https://api.thecatapi.com/v1/breeds";
  
  //     // Fetch the data from the Cat API
  //     const response = await axios.get(apiUrl, {
  //       headers: {
  //         // Including my API key in the request headers
  //         "x-api-key": API_KEY,
  //       },
  //     });
  
  //     // Checking if the response is not good
  //     if (!response.ok) {
  //       // Throw an error if the fetch request failed
  //       throw new Error("Can not find cat breeds");
  //     }
  
  //     // Parse the JSON response to get list of cat breeds
  //     const breeds = await response.json();
  
  //     // Looping through each breed
  //     breeds.forEach((breed) => {
  //       // Creating a new <option> element for each breed
  //       const option = document.createElement("option");
  //       // Setting the value of the option to the breed's id
  //       option.value = breed.id;
  //       // Setting the breed's name to dispaly text option
  //       option.textContent = breed.name;
  //       // Append the option to the breedSelect dropdown
  //       breedSelect.appendChild(option);
  //     });
  
  //     // ERRAWR handling
  //   } catch (err) {
  //     console.error(err, 'This is an ERRAWR!!! I am Reptar, here me Rawr! ');
  //   }
  // }
  // initialLoad();


  export async function favourite(imgId) {
    // your code here
  }

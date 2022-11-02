// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const fairenheight = document.getElementById("fairenheight").value

   // process
  const celcius = ((fairenheight - 32) * 5 / 9)
    
  // output
  document.getElementById("temp").innerHTML =
    "That is " + celcius.toFixed(2) + " ᵒC."
}
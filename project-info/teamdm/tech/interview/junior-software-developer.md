<!-- src: https://interview.talently.ai/interview/65512d47bd94414fcb96e6cc -->

## Junior Software Developer
* i received an email from RemoteBase which says:
   
  Dear Community Member, 

  Great news! We've partnered with Talently(https://talent.ai/) to bring you a selection of exciting developer job opportunities on a weekly basis.

  Check out the latest openings by clicking on the "Available Positions" button below and take the interview to apply for the roles you qualify for.
* talenty is company that uses a technology that uses artificial intelligence and machine learning to identify, assess, and match job candidates with the right job opportunities.
* on the email there is a "Check Available Positions" button 
  * after clicking the button, a google doc opens in an excel format that list job positions with the latest date from November 13 to 14.(https://docs.google.com/spreadsheets/d/14rWRRk_jPXwzOBxbZrmMpjQTFlsNJkC_IDV7kC4PfQs/edit#gid=63126906)
  
  * i selected Junior Software Developer role
    * a talenty page opened with a form to fill in(name, email)
      * there are two types of interview(they are using voice caption that displays your responses into script. i am waiting for the feedback so i can get my answer)
        1. Behavioral Interview that is led by an AI with 10 questions
        2. Technical Interview - Live Coding
           * Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string in js

              ```js
              // my answer from the ai prompt

              function longestCommonPrefix(strs) {
                if (!strs.length) return "";

                return strs[0].split('').reduce((prefix, char, i) => {
                  if (strs.every(str => str[i] === char)) {
                    return prefix + char;
                  } else {
                    throw strs[0].slice(0, i);
                  }
                }, "");
              }

              console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
              console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
              ```
           * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
               ```js
               // my answer
               function moveZeroes(nums) {
               let insertPos = 0;

               // Move all non-zero elements to the front of the array
               for (let i = 0; i < nums.length; i++) {
                 if (nums[i] !== 0) {
                   nums[insertPos++] = nums[i];
                 }
               }

               // Fill in the rest of the array with zeros
               while (insertPos < nums.length) {
                 nums[insertPos++] = 0;
               }

               return nums;
             }

             console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
               ```
/*---------------------------------------------------------------------------------
                                    Declarations
---------------------------------------------------------------------------------*/
let row;
let column;
let maxRangeOfElements=3;
let minRangeOfElements=1;
let array=[];
let count;                                        //checking of similar elements
let space=" ";                                   //for spacing between functions
let warnings =0;                                 //warnings for wrong input of rows and columns
let product;                                    //product of rows and columns
let compare=0;
let invinput=false;
let response0;
let response1;
let response2;
let nameOfThePlayer;

/*---------------------------------------------------------------------------------
                                    START GAME
---------------------------------------------------------------------------------*/
function STARTGAME(){

    const readline = require("readline");
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
   
    rl.question("\n WELCOME to the World of Number Crush!! \n \n Please Enter your name: \t", function (name) {
        nameOfThePlayer = name;

        console.log("\n Welcome",nameOfThePlayer,"!!")
       
    
    rl.question("\n Please choose from below: \n 1.START GAME \n 2.INSTRUCTIONS \n", function (answer0) {
        response0 = answer0;

        if(response0==1)
        {
            GAME(rl);
        }
        else if(response0==2)
        {
            console.log("\n Welcome to the world of crushing!\n",
            "1.Yes! you may have crushed many candies.But have you tried crushing numbers??If not, You have come to the right spot!\n",
            "2.You can create any number of rows and columns of your wish.\n",
            "3.You have to group three or more numbers together to make them zero. You can group them horizontally, vertically or even diagonally.\n",
            "4.Once a column becomes zero, you have an option of regenerating it. If two columns are zero,the first of the ascending numbered column will be regenerated.\n",
            "Note that you can only regenerate one column at a time.\n",
            "5.Try to minimize the number of moves you make and find logics to finish the game sooner.",
            "6.The game ends only when all the column becomes zero.");

            exitToMainMenu(rl)
        }
    })
})
}

/*-----------------------------------------------------------------------------------
                        Exit to main menu function
-----------------------------------------------------------------------------------*/
function exitToMainMenu(rl){
    rl.question("\n Exit to main menu? \n 1.YES! LET's START \n 2.NO EXIT GAME \n", function (answer1) {
        response1 = answer1;

        if(answer1==1)
        {
            GAME(rl);
        }
        else
        {
            rl.close();
        }
    });
}
/*-----------------------------------------------------------------------------------
        Getting row and column input from the user for matrix formation
-----------------------------------------------------------------------------------*/
function GAME(rl){
   
    
    rl.question("\n Enter the total row and column of matrix: \n", function (answer2) {
     response2 = answer2;
     splitting=response2.split(" ");
     row = parseInt(splitting[0]);
     column = parseInt(splitting[1]);
     
     product = row*column;
    
        arrayCreation(row,column);
        console.log(" \n ");
        displayWithSpacing(row,column);
        callingAllFunctions(row,column);
        swapping(rl,row,column,product);
    
    
    });
    
    }
/*---------------------------------------------------------------------------------
                        Array formation using math.random
---------------------------------------------------------------------------------*/
function arrayCreation(row,column){
    for(let i=0;i<row;i++)
      {
        let temporaryArray=[];
        for(let j=0;j<column;j++)
            {
               temporaryArray.push((Math.floor(Math.random()*(maxRangeOfElements-minRangeOfElements))+minRangeOfElements));
            }
            array.push(temporaryArray);
        }
        
      }
   
/*------------------------------------------------------------------------------------
                      Displaying the numbers with proper spacing
------------------------------------------------------------------------------------*/
function displayWithSpacing(row,column){
    for (i=0;i<row;i++)
        {
            for (j=0;j<column;j++)
                {
                    space += array[i][j] + "   ";
                }
            console.log (space);
            space=" ";
        }
    }
/*-----------------------------------------------------------
Function to call horizontal, vertical and diagonal checks
-----------------------------------------------------------*/
function callingAllFunctions(row,column){
    horizontalCheckForSimilarNumbers(row,column);
    // displayWithSpacing(row,column);                                 tip": We can check the working of each and every function seperately using this display function
    verticalCheckForSimilarNumbers(row,column);
    // displayWithSpacing(row,column);
    leftToRightDiagonalCheck(row,column);
    // displayWithSpacing(row,column);
    rightToLeftDiagonalCheck(row,column);
    displayWithSpacing(row,column);
}
/*---------------------------------------------------------------------------------
  Horizontal checking for elements and making them zero when they are similar
---------------------------------------------------------------------------------*/
function horizontalCheckForSimilarNumbers(row,column){

for(let i=0;i<row;i++)
     {
       
         for(let j=0;j<column;j++)
         {
           count=0;
                 for(let k=j;k<column;k++)
                 {
         
                                          
                     if(array[i][k]==array[i][k+1])
                         {
                             count += 1;
                         }
                     else
                         {
                             break;
                         }
                 }
                if(count>=2)
                             {
                                for(let k=j;k<=j+count;k++)
                                {
                                    array[i][k]=0;
                                }
                              
                             }
         }
     }
 }
/*------------------------------------------------------------------------------
       Vertical checking for elements and making them zero when they are similar
------------------------------------------------------------------------------*/
function verticalCheckForSimilarNumbers(row,column){
    
    for(let i=0;i<row;i++)
            {
                for(let j=0;j<column;j++)
                {
                    count = 0;
                    for(let k=i;k<=row;k++)
                    {
                        
                        if((k+1)<row && (array[k][j]==array[k+1][j]))
                            {
                                count +=1;
                            }
                        else
                            {
                                break;
                            }
                    }
                   
                      if(count>=2)
                            {
                                for(k=i;k<=i+count;k++)
                                    {
                                    array[k][j]=0;
                                    }
                            }
                }
               
            }
}
/*---------------------------------------------------------------------------------------
      Left to Right diagonal checking for similar elements and making them zero 
---------------------------------------------------------------------------------------*/
function  leftToRightDiagonalCheck(row,column){
    // console.log ("\n Diagonal check (left to right) \n");
     for(let i=0;i<row;i++)
             {
                 for(let j=0;j<column;j++)
                 {
                     let l=j;
                     count =0;
                     for(let k=i;k<row;k++)
                         {
                          if(k<row && l<column && (k+1)<row && (l+1)<column)
                              {
                                    
                                 if(array[k][l] !=0)
                                 {
                                   
                                     if(array[k][l]==array[k+1][l+1])
                                         {
                                             
                                             count +=1;
                                             l++;
                                         }
                                     else
                                         {
                                            
                                             break;
                                         }
                                 }
 
                                 else
                                 {
                                     break;
                                 }
                         
                              }
                              else
                             {
                                 break;
 
                             }
 
                         }
                         
                         if(count>=2)
                         {
                         
                         l=j;
                        
                          for(let k=i;k<=i+count;k++)
                             {
                                                                 
                                
                                 array[k][l]=0;
                                 l++;
                                 
                             }
                          
                         }
                         
                        
                 }
                
             }
 }
 
/*----------------------------------------------------------------------------
     Right to left diagonal checking for similar elements and making them zero 
-----------------------------------------------------------------------------*/
function rightToLeftDiagonalCheck(row,column){
    console.log("\n The matrix after all the checks: \n ");

    for(let i=0;i<row;i++)
            {
                for(let j=0;j<column;j++)
                {
                    let l=j;
                    count=0;
                   for(k=i;k<row;k++)
                   {
                       if(k+1<row && l>=0)
                       {
                           if(array[k][l] !=0)
                                {
                                if(array[k][l]==array[k+1][l-1])
                                    {
                                        count+=1;
                                        l--;
                                    }
                                else
                                    {
                                        
                                        break;
                                    }
                                }
                            else
                            {
                                break;

                            }
                       }
                       else
                            {
                                break;

                            }
                   }
                                                                                                            
                   if(count>=2)
                   {
                       
                        let l=j;
                        for(let k=i;k<=i+count;k++)
                        {
                            array[k][l]=0;
                            l--;
                        }
                   }
                        
                       
                }
               
            }
}
/*---------------------------------------------------------------------
                            SWAPPING FUNCTION
---------------------------------------------------------------------*/            

function swapping(rl,row,column,product){

    let split1,split2;
    let r1,r2,c1,c2;
    
    rl.question("\n Enter the source co-ordinates to swap: \n", function (value){
        let b = value;
        split1 = b.split(" ");
        r1 = parseInt(split1[0]);
        c1 = parseInt(split1[1]);
        r1=r1-1;
        c1=c1-1;
        
    rl.question("\n Enter the destination co-ordinates to swap: \n", function (num){
        c=num;
        split2= c.split(" ");
        r2 = parseInt(split2[0]);
        c2= parseInt(split2[1]);
        r2=r2-1;
        c2=c2-1;


if((r1<row && r2<row) && (c1<column && c2<column))
   {
        if(((r2==r1+1 || r2==r1-1) && (c2==c1)) || ((c2==c1+1 || c2==c1-1) && (r2==r1)) )
            {
            
                swap= array[r2][c2];
                array[r2][c2]= array[r1][c1];
                array[r1][c1]=swap;
                invinput=false;
            }
    
        else
            {
                console.log("Cannot swap to the given destination");
                warnings +=1;
                invinput=true;
                
            }

  }
else
    {
        console.log("Invalid input");
        warnings +=1;
        invinput=true;
    }
    
    if (warnings>=3)
       {
         console.log("GAME OVER");
         rl.close();
       }
     
    else
        {
            if(invinput==false)
                {
                    callingAllFunctions(row,column);
                    zeroMatrix(rl,row,column,product);
                 if(compare!=product)
                 {
                    randomnum(rl,row,column,product);
                    swapping(rl,row,column,product);
                 }
                    
                    
                    
                   
                }

             else
                {
                    console.log("You entered wrong values. Warning",warnings,". You have only",(3-warnings),"left");
                    swapping(rl,row,column,product);
                   
                }
                        
                            
        }
   
            
})
});

}
/*-----------------------------------------------
            FUNCTION ZERO CHECK
------------------------------------------------*/   
function zeroMatrix(rl,row,column,product){
for (let i=0;i<row;i++)
        {
            for(let j=0;j<column;j++)
                {
                    if (array[i][j]==0)
                        {
                           compare+=1;
                           
                        }

                }

        }

        if (compare==product)
            {
                console.log("YOU WON THE GAME!! THANKS FOR PLAYING",nameOfThePlayer,"!")
                rl.close();
                         
            }
        else
            {
                compare=0;
                
            }

}

/*-----------------------------------------------------------
Regenarating zeroed column:
-----------------------------------------------------------*/
function randomnum(rl,row,column,product){
    for(let i=0;i<row;i++)
        {
            for(let j=0;j<column;j++)
            {
                if(array[i][j]===0)
                {
                    zeroCount=0;
                    for(let k=i;k<row;k++)
                    {
                        
                        if(array[k][j]==0)
                        {
                            zeroCount+=1;
                        }

                    }
                
                    if (zeroCount==row)
                    {
                            rl.question("Do you want to regenerate the column?  \n  1.Yes \n 2.No \n", function (ans) {
                                anss = ans;
                                
                               
                                

                    if(anss==1)
                            {
                            
                                for(let k=i;k<row;k++)
                                {

                                
                                    array[k][j]=((Math.floor(Math.random()*(maxRangeOfElements-minRangeOfElements))+minRangeOfElements));
                                }

                                callingAllFunctions(row,column);
                                swapping(rl,row,column,product);
                              
                            

                            }
                    else
                            {
                                console.log("You didn't regenerate anything");
                                
                                swapping(rl,row,column,product);
                               
                            }

                            
                            })
                            break;
                        
                    }
                }
            }
        }
    }

STARTGAME();
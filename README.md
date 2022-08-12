# Samantha Nay SEI-slotMachine-Project 1

## Game Description

This slot machine is a little bit different than normal. There is no betting, but it is still based on random luck.

A user will "spin" the machine in an attempt to "grow" crops for a garden.
There are 12 items all with different point values: 9 items that are positive points, 3 items are negative points.
There is one specific item combination that destroys the garden and starts the game over. It takes 50 points to grow one crop and you complete your garden by growing four crops.
User will see an overview of the game towards the top of the screen. As they grow their garden they will be able to watch the crops accumulate. 

## Game Pictures


<img width="1133" alt="Screen Shot 2022-08-12 at 3 19 16 AM" src="https://user-images.githubusercontent.com/109879644/184316491-f671c4e8-29cf-4e69-a2f6-e534ab31b49d.png">
This is the game after the first click of the Grow button. The user is shown how many points they have until they reach their next crop. 
At this point a random number is being generated for each lane and that random number corresponds to a garden related item stored in an array.
A conditional statement is evoked in the click handler function that pushes the point value associated with the randomly generated garden item into an array.

<img width="1123" alt="Screen Shot 2022-08-12 at 3 20 08 AM" src="https://user-images.githubusercontent.com/109879644/184316575-b697bb09-747d-4f7d-9c79-9cd4c6c28685.png">
As more points accumulate, you start to see the crops the player has grown on the right hand side.
As the user reaches point checkpoints in intervals of 50, they are updated with what crops they have grown and how many points until their next crop.

<img width="1120" alt="Screen Shot 2022-08-12 at 3 20 45 AM" src="https://user-images.githubusercontent.com/109879644/184316632-22724008-e7db-40d1-8f9d-1e9b6994a62c.png">
When the player has made it all the way through the game, reaching 200 points, this is the view they see and the game resets.

<img width="1213" alt="Screen Shot 2022-08-12 at 3 21 31 AM" src="https://user-images.githubusercontent.com/109879644/184316687-68f5fefc-8635-4222-83ea-fa68dfa85bb6.png">
The combination of weeds, pests and critters is game ending. This is the screen the user sees and the game resets.


## Game Link

https://sjnay.github.io/slotMachine/

## Resources 

w3Schools***
MDN Web Docs
stackoverflow

## Technologies 

HTML
CSS 
JavaScript

## Next Steps - Garden Games

Moving forward, there are a lot of elements I would like to upgrade and add to this game. The first being items instead of just words. My initial vision was to have the items in each lane as a vertical carousel and spin like a real slot machine. Also having each of the lanes stop one after the other. A feature I would want to add is having pictures of the crops pop up once the certain amount of points is reached. Lastly, figuring out a way to have the points for each item pop up and float away so the user has a better idea of the point system. 
Regarding my JS code, instead of having 3 seperate item arrays, point arrays, and keep score functions I want to turn it into one of each. The current way it is written was how it made sense in my head, but now after staring at it for 4 days I feel like I can make it more dry. 

## Next Steps - Learning

The biggest thing I felt like I struggled with was the internal organization of my HTML & JavaScript documents. I feel like my JS code could be dryer and also have more of a flow. Gaining a better understanding of best use cases regarding OOP and classes, arrays, objects, functions, loops, etc., will help me further evolve this project to be porfolio ready.

Another learning point for me was that sometimes it really is just that simple and google first if you aren't sure, especially if you have a deadline. 

Any and all feeback is welcome!! If you have any ideas or suggestions feel free to submit an issue in this repository!











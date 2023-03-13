# TOP-knight-travails

Website = https://tyler7r.github.io/TOP-knight-travails/;

This project tested my data algorithm skills. Using my knowledge of binary search trees. I created all possible squares on a chess board as objects. 

Within each of these square objects, I made a property for each of the eight possible moves that could be made from each square. 

If the move put the knight off the board then I marked it as null.

I then had to rely on my knowledge of depth-search traversal and recursion to search through all possible routes from the start square to the final square. (This knowledge proved to be less established than I originally thought when I started the project).

I went through went felt like a million iterations of the logic to search through a square's moves and then move onto the next set of possibilities.

The piece of logic that I used that made the biggest breakthrough for me was making a move counter and adding that as a property to each of the squares as they were selected in the recursion. 

This meant that I could now still visit every square multiple times without incurring a max call stack error because if a square had been visited in less moves on a previous recursive call then I could immediately stop the current recursive call.

The next issue was documenting exactly which square was visited and in what order. 

I solved this problem by creating a knight object with a path property. 

Then it was simply a matter of creating the board on the DOM and adding appropriate event logic and styling.



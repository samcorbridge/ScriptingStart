#pragma strict
import UnityEngine.UI;  //We can use these special lines at the top to import more code from pre-built libraries giving us more functionality.

public var textObject : UI.Text;  //By default every variable is set to private.  In this case we want this variable publicly visible so we can easily use it within Unity.
public enum States {intro, elizabeth, michael, jacob, hannah, askConductor, interrogate, body, solve, whySolve, fail, fail2, success};  //An enum is a special type of variable that allows us to name each number with a name. (instead of it just being a number).
public var myState : States;  //Think of this as the parent variable that we use, with the enum value held inside.  (myState.intro)
public var backgroundImage: UI.Image;
public var images: Sprite[];


function Start () {  //The start function runs once, the first time this object loads.
    myState = States.intro;  //We want to make sure the myState gets assigned to .intro
}

function Update () {
    print (myState);  //This will display the myState value within the console.  This might be helpful if there is a problem and the text doesn't get properly updated on the normal screen.
    if (myState == States.intro) 					    {state_intro ();}
    else if (myState == States.elizabeth) 				{state_elizabeth ();}
    else if (myState == States.michael)				    {state_michael ();}
    else if (myState == States.jacob)	    			{state_jacob ();}
    else if (myState == States.hannah)                  {state_hannah ();}
    else if (myState == States.askConductor)            {state_askConductor ();}
    else if (myState == States.interrogate)             {state_interrogate ();}
    else if (myState == States.body)                    {state_body ();}
    else if (myState == States.solve)                   {state_solve ();}
    else if (myState == States.whySolve)                {state_whySolve ();}
    else if (myState == States.fail)                    {state_fail ();}
    else if (myState == States.fail2)                   {state_fail2 ();}
    else if (myState == States.success)                 {state_success ();}
}

function state_intro(){
    backgroundImage.sprite = images[0];
    textObject.text = "It is November of 1945 in Europe.\n" +
        "You are a detective, on a train, which just departed the Berlin station. \n" +
        "You take a quick nap, before being awakened by the conductor of the train." +
        "\"There has been a murder on the train. I need you to find out who did it.\" \n" +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers, or A to ask the conductor if he has any more information.";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    
}

function state_interrogate(){
    backgroundImage.sprite = images[1];
    textObject.text = "You have looked around and discovered 4 people who seem pretty nervous. \n" +
        "Who would you like to interview? \n" +
        "\n\n" +
        "Press E for <color=yellow>Elizabeth</color>, M for <color=teal>Michael</color>, J for <color=orange>Jacob</color>, and H for <color=purple>Hannah</color>. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.E)) 					{myState = States.elizabeth;}
    if (Input.GetKeyDown (KeyCode.M)) 					{myState = States.michael;}
    if (Input.GetKeyDown (KeyCode.H))                   {myState = States.hannah;}
    if (Input.GetKeyDown (KeyCode.J))                   {myState = States.jacob;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_elizabeth(){
    backgroundImage.sprite = images[1];
    textObject.text = "After interrogating <color=yellow>Elizabeth</color>, you observe: \n" +
        "She is 17. She's on the train with her family. She seems pretty nervous talking to you. She's wearing neat, modest clothes. You notice a star necklace around her neck. She tells you she doesn't know who killed him.  \n" +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers, or A to ask the conductor if he has any more information. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_michael(){
    backgroundImage.sprite = images[1];
    textObject.text = "After interrogating <color=teal>Michael</color>, you observe: \n" +
        "He is 53. He's on the train alone. He used to be a banker, but has been unemployed for a few years. He is going to be looking for work at the destination. He seems unhealthy, very skinny and frail. He seems a little uneasy talking to you. He tells you that he didn't kill the man.  \n" +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers, or A to ask the conductor if he has any more information. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_jacob(){
    backgroundImage.sprite = images[1];
    textObject.text = "After interrogating <color=orange>Jacob</color>, you observe: \n" +
        "He is 29. He's on the train with his girlfriend. They met a few months ago at a camp, he says, and they are running away together. He was vague when asked running away from who. His clothes look a little worn, but he has a nice little hat on. He looks like he is very tired and stressed. Promises it wasn't him who did the kiling.  \n" +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers, or A to ask the conductor if he has any more information. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_hannah(){
    backgroundImage.sprite = images[1];
    textObject.text = "After interrogating <color=purple>Hannah</color>, you observe: \n" +
        "She is 35. Her family was killed in World War 2, and she is leaving her home country to find a new life. She has nice clothes on, and a nice hopeful smile. She said she would never kill another person. \n" +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers, or A to ask the conductor if he has any more information. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_askConductor(){
    backgroundImage.sprite = images[3];
    textObject.text = "This is a lower end passenger train. Mostly just poorer or underpriviledged people ride on these. The man who died didn't look too poor, although he may have just wanted to save money. He looked fine when he first boarded, then when I punched his ticket he looked rather nervous. All of the other passengers seemed afraid of him. On board the train there are 44 passengers, including you and me. The man's name was Freidrich Goodsdorfer, I don't know where he was headed or why he was on the train, but it didn't end too well for him now did it?" +
        " \n"  +
        "\n\n" +
        "Press B to investigate the body, I to interrogate the passengers. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.B)) 					{myState = States.body;}
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
    
}

function state_body(){
    backgroundImage.sprite = images[2];
    textObject.text = "After investigating the body, you observe: \n" +
        "He was a man probably in his 40s. He has been stabbed to death. Upon closer observation, you find 42 stab wounds all over his body. There is blood everywhere. He is wearing a military uniform, it has been torn to shreds with all of the stab wounds.\n" +
        "\n\n" +
        "Press I to interrogate the passengers, or A to ask the conductor if he has any more information. \n" +
        "<color=maroon>Press X to make your accusation</color>";
    if (Input.GetKeyDown (KeyCode.I)) 					{myState = States.interrogate;}
    if (Input.GetKeyDown (KeyCode.A))                   {myState = States.askConductor;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.solve;}
    
}

function state_solve(){
    backgroundImage.sprite = images[4];
    textObject.text = "<color=maroon>Who did the killing?</color> You are the detective after all, they have to believe you. Now, who are you going to throw in jail?\n" +
    "<color=yellow>E - Elizabeth</color> \n" +
    "<color=teal>M - Michael</color> \n" +
    "<color=orange>J - Jacob</color> \n" +
    "<color=purple>H - Hannah</color> \n" +
    "N - Nobody at all \n" +
    "T - All 4 of them \n" +
    "X - Every last passenger on the train.";
    if (Input.GetKeyDown (KeyCode.E)) 				    {myState = States.fail;}
    if (Input.GetKeyDown (KeyCode.M))                   {myState = States.fail;}
    if (Input.GetKeyDown (KeyCode.J))                   {myState = States.fail;}
    if (Input.GetKeyDown (KeyCode.H))                   {myState = States.fail;}
    if (Input.GetKeyDown (KeyCode.N))                   {myState = States.fail2;}
    if (Input.GetKeyDown (KeyCode.T))                   {myState = States.fail;}
    if (Input.GetKeyDown (KeyCode.X))                   {myState = States.whySolve;}

}

function state_whySolve(){
    textObject.text = "Now, why would you want to throw all of them in jail? That's just mean. \n\n" + 
    "This is risky business, you probably won't be a very popular detective if you incarcerate a whole bunch of innocent people. \n\n" +
    "Are you sure? \n" +
    "Y or N";
    if (Input.GetKeyDown (KeyCode.Y)) {myState = States.success;}
    if (Input.GetKeyDown (KeyCode.N)) {myState = States.solve;}
}

function state_fail(){
    backgroundImage.sprite = images[5];
    textObject.text = "Well. You have successfully incarcerated the wrong person. \n" +
    "Nice job detective. \n" + "\n\n" + "<color=red>                           GAME OVER</color>" + "\n\n" + "<color=grey>Try again? Press Y</color>";
    if (Input.GetKeyDown (KeyCode.Y))    {myState = States.intro;}
}

function state_fail2(){
    backgroundImage.sprite = images[5];
    textObject.text = "Why would you not want to throw anyone in jail? \n" +
    "That's the best part of your job! \n" +
    "You're just going to let the murderer get away?" + "\n\n" + "<color=red>                             GAME OVER</color>" + "\n\n" + "<color=grey>Try again? Press Y</color>";
    if (Input.GetKeyDown (KeyCode.Y))    {myState = States.intro;}
}

function state_success(){
    backgroundImage.sprite = images[6];
    textObject.text = "<color=green>SUCCESS</color> \n" +
    "\n\n" + "Answer: the person murdered was a guard at a concentration camp. All of the passengers were Jews, leaving Germany. None of them wanted to be a murderer, so they all stabbed the guard once, therefore, he died by bleeding to death, and none of the Jews were officially the killer.";
}
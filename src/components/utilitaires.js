import React from "react";

export const popNote = (note) => {
  
  var popDiv = document.createElement("div");
  popDiv.id = "popnote";
  popDiv.className = "popnote";
  document.body.appendChild(popDiv);

  let contentText = `   <div style="text-align:center">
                            <b>${note}</b> <br />
                            Cliquez pour écouter la note 
                        </div>`;
     

  document.getElementById("popnote").innerHTML = contentText;
};

export const popNoteOut = () => {
  const elements = document.getElementsByClassName("popnote");
  while (elements.length > 0) elements[0].remove();
};

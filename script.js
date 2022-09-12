function formValue(id) {
  let formElement = document.getElementById(id);
  
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

function generate() {
  
  let cartoonChar = formValue("cartoonChar");
  let animal = formValue("animal");
  let song = formValue("song");
  let famousPerson = formValue("famousPerson");
  let adjetive = formValue("adjetive");
  let funnyWord = formValue("funnyWord");
  let verb = formValue("verb");
  let nickname = formValue("nickname");

  let madLib = `
    Mr. ${cartoonChar}
    <br><br>
    As morning came, the ${animal}s were singing the song ${song}. The music was so loud, it woke up ${famousPerson} as well as the whole neighborhood. The ${animal}s were ${adjetive} and the whole experience was ${funnyWord}, for a lack of a better word. Honestly, after that, this is the last time I ${verb}.
    <br><br>
    Signed ${nickname}
    `;

    document.getElementById("output").innerHTML = madLib;
    addClassToElement("container", "generated")
}
function addingEventListener() {
    const myElement = document.getElementById('button');
  
    function myEventListenerFunction(event) {
      console.log('Event occurred:', event);
    }
  
    myElement.addEventListener('click', myEventListenerFunction);
  }
  addingEventListener();
  
// content.js
const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) {
            if (node.classList.contains('tf-v1-sidetab')) {
                console.log("Removing node:", node);
                node.remove();
            }
          }
        }
      }
    }
  });
  
  const targetNode = document.documentElement; // Watch the entire DOM
  const config = { childList: true, subtree: true };
  
  observer.observe(targetNode, config);
  
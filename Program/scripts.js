  const agendaItems = [
    { time: '##:00', title: 'Meeting is called to order', image: 'resources/Images/image1.jpeg', text: 'Your text content goes here.' },
    { time: '##:03', title: 'Today\'s agenda.', image: 'your-image2.jpg', text: 'Guests to the meeting are recognized and asked to give introductory remarks.' },
    { time: '##:06', title: 'Grammarian presents the Word of the Day', image: 'resources/Images/image1.jpeg', text: 'Your text content goes here.' },
    { time: '##:08', title: 'Toastmaster Introduces Prepared Speaker 1 ', image: 'your-image2.jpg', text: 'Guests to the meeting are recognized and asked to give introductory remarks.' },
    { time: '##:15', title: 'Toastmaster Introduces Prepared Speaker 2', image: 'resources/Images/image1.jpeg', text: 'Your text content goes here.' },
    { time: '##:22', title: 'Toastmaster Introduces Table Topics Master', image: 'your-image2.jpg', text: 'Guests to the meeting are recognized and asked to give introductory remarks.' },
    { time: '##:37', title: 'Vote for Best Table Topics Speaker', image: 'resources/Images/image1.jpeg', text: 'Your text content goes here.' },
    { time: '##:03', title: 'General Evaluator presents Evaluation Team', image: 'your-image2.jpg', text: 'Guests to the meeting are recognized and asked to give introductory remarks.' },

    // Add more agenda items as needed
  ];
  
  function toggleExpand(itemId) {
    const itemContent = document.getElementById(itemId + '-content');
    itemContent.style.display = (itemContent.style.display === 'block') ? 'none' : 'block';
  }
  
  
function createAgendaItem(item, index) {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.onclick = () => toggleExpand('item' + index);
  
    listItem.innerHTML = `
      <div class="time">${item.time}</div>
      <div class="title">${item.title}</div>
      <div class="content" id="item${index}-content">
        <div class="image-container">
          <img src="${item.image}" alt="Image ${index + 1}" class="agenda-image">
        </div>
        <div class="text-content">
          <p>${item.text}</p>
        </div>
      </div>
    `;
  
    return listItem;
  }
  
  // Dynamically populate the agenda list
  const agendaList = document.getElementById('agenda-list');
  agendaItems.forEach((item, index) => {
    const listItem = createAgendaItem(item, index);
    agendaList.appendChild(listItem);
  });
  
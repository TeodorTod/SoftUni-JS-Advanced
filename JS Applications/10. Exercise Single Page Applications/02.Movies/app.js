function solve() {
    const recipientEl = document.getElementById('recipientName');
    const titleEl = document.getElementById('title');
    const messageEl = document.getElementById('message');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const listEl = document.getElementById('list');
    const sendList = document.getElementsByClassName('sent-list')[0];
    const deleteList = document.getElementsByClassName('delete-list')[0];


    //addBTN event
    addBtn.addEventListener('click', addInfo);

    function addInfo(ev) {
        ev.preventDefault();
        if (recipientEl.value != '' && titleEl.value != '' && messageEl.value != '') {
            const r1 = recipientEl.value;
            const t1 = titleEl.value;
            const m1 = messageEl.value;

            


            const liiiEl = document.createElement('li');

            const title = document.createElement('h4');
            title.textContent = `Title: ${t1}`;

            const recipientName = document.createElement('h4');
            recipientName.textContent = `Recipient Name: ${r1}`;

            const text = document.createElement('span');
            text.textContent = m1;

            const divEl = document.createElement('div');
            divEl.id = 'list-action';

            const sendBtn = document.createElement('button');
            sendBtn.type = 'submit';
            sendBtn.id = 'send';
            sendBtn.textContent = 'Send';
            divEl.appendChild(sendBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'submit';
            deleteBtn.id = 'delete';
            deleteBtn.textContent = 'Delete';
            divEl.appendChild(deleteBtn);

           

            liiiEl.appendChild(title);
            liiiEl.appendChild(recipientName);
            liiiEl.appendChild(text);
            liiiEl.appendChild(divEl);
            listEl.appendChild(liiiEl);

            recipientEl.value = '';
            titleEl.value = '';
            messageEl.value = '';


            sendBtn.addEventListener('click', sendFunc);

            function sendFunc(ev) {
                const sendLi = document.createElement('li');
                const recSpan = document.createElement('span');
                recSpan.textContent = `To: ${r1}`;

                const titleSpan = document.createElement('span');
                titleSpan.textContent = `Title: ${t1}`;

                const divClass = document.createElement('div');
                divClass.className = 'btn';
                const delBtn = document.createElement('button');
                delBtn.type = 'submit';
                delBtn.className = 'delete';
                delBtn.textContent = 'Delete';
                divClass.appendChild(delBtn);

                sendLi.appendChild(recSpan);
                sendLi.appendChild(titleSpan);
                sendLi.appendChild(divClass);
                sendList.appendChild(sendLi);

                listEl.replaceChildren();

                delBtn.addEventListener('click', move);
                recipientEl.value = '';
            titleEl.value = '';
            messageEl.value = '';

                function move(ev) {
                    const liDelEl = document.createElement('li');
                    const recSpan = document.createElement('span');
                    recSpan.textContent = `To: ${r1}`;

                    const titleSpan = document.createElement('span');
                    titleSpan.textContent = `Title: ${t1}`;

                    liDelEl.appendChild(recSpan);
                    liDelEl.appendChild(titleSpan);
                    deleteList.appendChild(liDelEl);

                    sendList.replaceChildren();

                    recipientEl.value = '';
                    titleEl.value = '';
                    messageEl.value = '';
                }
            }

            deleteBtn.addEventListener('click', onDelete);

            function onDelete(ev) {
                const liDelEl = document.createElement('li');
                const recSpan = document.createElement('span');
                recSpan.textContent = `To: ${r1}`;

                const titleSpan = document.createElement('span');
                titleSpan.textContent = `Title: ${t1}`;

                liDelEl.appendChild(recSpan);
                liDelEl.appendChild(titleSpan);
                deleteList.appendChild(liDelEl);

                listEl.replaceChildren();
                recipientEl.value = '';
                titleEl.value = '';
                messageEl.value = '';
            }

        }

        //reset Event
        resetBtn.addEventListener('click', resetFunc);

        function resetFunc(ev) {
            ev.preventDefault();
            recipientEl.value = '';
            titleEl.value = '';
            messageEl.value = '';
            
        }
        recipientEl.value = '';
            titleEl.value = '';
            messageEl.value = '';
    }
    

}
solve();

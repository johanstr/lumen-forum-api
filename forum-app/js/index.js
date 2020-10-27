let thread_list_element = document.querySelector('#thread-list');
let threads = [];

window.onload = function() {
    loadThreads();
}

async function loadThreads()
{
    await fetch('http://apiforum.api/threads')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            threads = data.data;
            showThreads();
        }).
        catch(error => console.log(error));
}

function showThreads()
{
    for(let i = 0; i < threads.length; i++) {
        let thread_item = `
            <a href="thread.html?id=${threads[i].id}" class="collection-item avatar collection-link">
                <img src="img/icon-php.png" alt="" class="circle">
                <div class="row">
                <div class="col s9">
                    <div class="row last-row">
                    <div class="col s12">
                        <span class="title">${threads[i].title}</span>
                        <p>${threads[i].description}</p>
                    </div>
                    </div>
                    <div class="row last-row">
                    <div class="col s12 post-timestamp">Moderator: ${threads[i].author}</div>
                    </div>
                </div>
                <div class="col s3">
                    <h6 class="title center-align">Statistieken</h6>
                    <p class="center-align">26 topics</p>
                </div>
                </div>
            </a>
        `;

        thread_list_element.innerHTML += thread_item;
    }
}

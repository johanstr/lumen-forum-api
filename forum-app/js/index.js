let thread_list_element = document.querySelector('#thread-list');

window.onload = function() {
    loadThreads();
}

async function loadThreads()
{
    await fetch('http://apiforum.api/threads')
        .then(response => response.json())
        .then(data => {
            showThreads(data);
        }).
        catch(error => console.log(error));
}

function showThreads(thread_collection)
{
    for(let i = 0; i < thread_collection.length; i++) {
        let thread_item = `
            <a href="thread.html" class="collection-item avatar collection-link">
                <img src="img/icon-php.png" alt="" class="circle">
                <div class="row">
                <div class="col s9">
                    <div class="row last-row">
                    <div class="col s12">
                        <span class="title">${thread_collection[i].title}</span>
                        <p>${thread_collection[i].description}</p>
                    </div>
                    </div>
                    <div class="row last-row">
                    <div class="col s12 post-timestamp">Moderator: SMN</div>
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
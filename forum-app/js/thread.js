const urlParams = new URLSearchParams(window.location.search);
const thread_id = urlParams.get('id');

let topics = null;
let topic_collection = document.querySelector('#topic-collection');

window.onload = function() {
    getAllTopics();
}

async function getAllTopics()
{
    await fetch('http://apiforum.api/thread/'+ thread_id +'/topics')
        .then(response => response.json())
        .then(data => {
            topics = data.data;
            showAllTopics();
        })
        .catch(error => console.log(error));
}

function showAllTopics()
{
    for(let i = 0; i < topics.length; i++) {
        let topic_block = `
        <!-- BEGIN TOPIC -->
        <a href="" class="collection-item avatar collection-link">
            <img src="http://www.gravatar.com/avatar/fc7d81525f7040b7e34b073f0218084d?s=50" alt="" class="square">

            <div class="row">
                
                <div class="col s8">
                    <div class="row last-row">
                        <div class="col s12">
                            <span class="title">${topics[i].title}</span>
                            <p>${topics[i].body}</p>
                        </div>
                    </div>
                    <div class="row last-row">
                        <div class="col s12 post-timestamp">Gepost door: ${topics[i].author} op: ${topics[i].created_at}</div>
                    </div>
                </div>

                <div class="col s2">
                    <h6 class="title center-align">Replies</h6>
                    <p class="center replies">8</p>
                </div>

                <div class="col s2">
                    <h6 class="title center-align">Status</h6>
                    <div class="status-wrapper">
                        <span class="status-badge status-open">open</span>
                    </div>
                </div>

            </div>
        </a>
        <!-- EINDE TOPIC -->
        `;

        topic_collection.innerHTML += topic_block;
    }
}
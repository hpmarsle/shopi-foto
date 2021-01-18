class Gallery{
    constructor() {
        this.gallery = document.getElementById("photos-container")
        this.photos = ['<img src="https://picsum.photos/200?random=1">',
        '<img src="https://picsum.photos/200?random=2">','<img src="https://picsum.photos/200?random=3">',
        '<img src="https://picsum.photos/200?random=4">','<img src="https://picsum.photos/200?random=5">',
        '<img src="https://picsum.photos/200?random=6">']
    }

    getPhotos() {
        let r = document.getElementsByClassName('row')[0]
        for(let i = 0; i < 6; i++){ 
            let photoCard = document.createElement('div')
            photoCard.id = (i+1).toString()
            photoCard.classList.add('photo-card')
            photoCard.classList.add('col-xs-6')
            photoCard.classList.add('col-md-4')
            photoCard.innerHTML = this.photos[i]
            let fave_button = document.createElement('div')
            fave_button.classList.add('fave-button')
            
            
            
            fave_button.innerHTML = "<form acton='https://localhost:3000/api/v1/photos' method='post'><input type='submit' class='fave-button' value='Favorite'/></form>"
            fave_button.addEventListener("submit", event => this.postToFaves(event))
            photoCard.appendChild(fave_button)
            r.appendChild(photoCard)
        }
    }
    postToFaves(e){
        let picToAdd = e.target.parentElement.parentElement
        let photo = picToAdd.firstElementChild
        this.addPicToFavoritesContainer(picToAdd)
        
        this.postToDB(photo)
    }

    postToDB(photo){
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                url: photo.src
            })
        }
        return fetch("http://localhost:3000/api/v1/photos",configObj)
        .then(res => console.log(res.json()))
        .catch(error => console.log(error))
    }

    addPicToFavoritesContainer(picToAdd){
        let clone = picToAdd.cloneNode(true)
        clone.id += "1"
        let cloneFaveButton = clone.lastChild
        let originalFaveButton = picToAdd.lastChild
        clone.removeChild(cloneFaveButton)
        picToAdd.removeChild(originalFaveButton)
        let faveContainer = document.getElementsByClassName('row')[1]
        faveContainer.appendChild(clone)
    }
}


let gallery = new Gallery()
gallery.getPhotos()


class Gallery{
    constructor() {
        this.gallery = document.getElementById("photos-container")
        this.photos = ['<img src="https://picsum.photos/200?random=1">',
        '<img src="https://picsum.photos/200?random=2">','<img src="https://picsum.photos/200?random=3">',
        '<img src="https://picsum.photos/200?random=4">','<img src="https://picsum.photos/200?random=5">',
        '<img src="https://picsum.photos/200?random=6">']
    }

    getPhotos() {
        for(let i = 0; i < 6; i++){
            
            let photoCard = document.createElement('div')
            photoCard.classList.add('photo-card')
            photoCard.innerHTML = this.photos[i] + i
            let fave_button = document.createElement('div')
            fave_button.classList.add('fave-button')
            fave_button.innerHTML = "<button class='fave-button'>Favorite</button>"
            photoCard.appendChild(fave_button)
            this.gallery.appendChild(photoCard)
        }
    }
}


let gallery = new Gallery()
gallery.getPhotos()
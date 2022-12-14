const imageMap = new Map();
imageMap.set("img1", {"src": "images/img_1.JPG", "alt": "cooking1", "index": 0});
imageMap.set("img2", {"src": "images/img_2.JPG", "alt": "cooking2", "index": 1});
imageMap.set("img3", {"src": "images/img_3.jpg", "alt": "cooking3", "index": 2});
imageMap.set("img4", {"src": "images/img_4.jpg", "alt": "cooking4", "index": 3});
imageMap.set("img5", {"src": "images/paint_5.jpg", "alt": "painting5", "index": 4});
imageMap.set("img6", {"src": "images/paint_6.jpg", "alt": "painting6", "index": 5});
imageMap.set("img7", {"src": "images/paint_7.jpg", "alt": "painting7", "index": 6});
imageMap.set("img8", {"src": "images/wallpaint_8.jpg", "alt": "wallpaint", "index": 7});
imageMap.set("img9", {"src": "images/zipeLine_9.jpg", "alt": "zipeline", "index": 8});
imageMap.set("img10", {"src": "images/carpentering_10.jpg", "alt": "carpentering", "index": 9});
imageMap.set("img11", {"src": "images/hike_11.jpg", "alt": "hike", "index": 10});

const imageKeys = Array.from(imageMap.keys());

var app = new Vue({
  el: '#galleryApp',
  data() {
    return {
      img1: imageMap.get("img1"),
      img2: imageMap.get("img2"),
      img3: imageMap.get("img3"),
      img4: imageMap.get("img4"),
      img5: imageMap.get("img5"),
      img6: imageMap.get("img6"),
      img7: imageMap.get("img7"),
      img8: imageMap.get("img8"),
      img9: imageMap.get("img9"),
      img10: imageMap.get("img10"),
      img11: imageMap.get("img11"),
      currentImageIndex: 0,
      currentImageKey: "img1"
    }
  },
  computed: {
    featuredGalleryImageSrc: function() {
      return imageMap.get(this.currentImageKey).src;
    },
    featuredGalleryImageAlt: function() {
      return imageMap.get(this.currentImageKey).alt;
    }
  },
  methods: {
    /**
     * Updates the featured gallery image to the next one in the list,
     * or goes back to the first if the one being displayed was the last.
     */
    displayNext: function() {
      if (app.currentImageIndex < imageMap.size - 1) {
        app.currentImageIndex += 1;
      } else {
        app.currentImageIndex = 0;
      }
      app.currentImageKey = imageKeys[app.currentImageIndex];
    },
    
    /**
     * Updates the featured gallery image to the previous one in the list,
     * or goes back to the last if the one being displayed was the first.
     */
    displayPrevious: function() {
      if (app.currentImageIndex == 0) {
        app.currentImageIndex = imageMap.size - 1;
      } else {
        app.currentImageIndex -= 1;
      }
      app.currentImageKey = imageKeys[app.currentImageIndex];
    },

    /**
     * Updates the featured gallery image to the preview image that was
     * selected.
     * @param {string} id The ID of the img to select
     */
    selectImage: function(id) {
      app.currentImageIndex = imageMap.get(id).index;
      app.currentImageKey = id;
    }
  }
})
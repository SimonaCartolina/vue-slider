export default{
    data(){
      return{
        currentIndex: 0,
      slides: [
        'naruto.jpg',
        'tekken.webp',
        'cod.jpg',
        'battelfield.jpg',
      ]
    };
      },
    methods:{
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      }
    }
  };
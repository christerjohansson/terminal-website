const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About me',
        width: '450px',
        height: '400px',
        top: 20,
        right: 50,
        bottom: 20,
        left: 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', ()=>{
    const contactBox = new WinBox({
        title: 'How to contact me',
        background: '#00aa00',
        width: '450px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 20,
        left: 100,
        mount: contactContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})
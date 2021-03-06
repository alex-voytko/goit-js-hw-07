const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

const imgGalleryRef = document.querySelector('#gallery');
const createGallery = ({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="300" height="150" border="10px" style="border-radius: 8px"></li>`;
};

const build = images.map(createGallery).join('')

imgGalleryRef.insertAdjacentHTML("beforeend", build);
console.log(imgGalleryRef)




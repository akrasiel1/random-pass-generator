const paragraph = document.querySelector('.password');
const button = document.querySelector('.btn');

const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z',
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z',
                    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '£', '$', '&', '%'];

const generate = () => {
    let password = [];
    let passwordLength = Math.floor((Math.random() *14) + 7);
    for(let i = 0; i < passwordLength; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        password.push(characters[randomChar]);
    }
    password = password.join('');
    paragraph.textContent = password;
    paragraph.classList.remove('text-muted');
    paragraph.classList.add('text-white', 'bg-primary');
}


button.addEventListener('click', generate);
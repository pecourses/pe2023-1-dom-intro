'use strict';

const user = {
  firstName: 'Test1',
  lastName: 'Testovich1',
  age: 28,
  photoSrc: 'https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg',
};

const userCardEl = document.createElement('article');
userCardEl.classList.add('userCard');
document.body.append(userCardEl);

const userImg = createImage(user);
const userInfoEl = createUserInfo(user);
const trashIcon = createTrashIcon();

userCardEl.append(userImg, userInfoEl, trashIcon);

function createImage({ photoSrc, firstName, lastName }) {
  const userImg = document.createElement('img');
  userImg.src = photoSrc;
  userImg.alt = `${firstName} ${lastName}`;
  userImg.classList.add('userImg');
  return userImg;
}

function createUserInfo({ firstName, lastName, age }) {
  const userInfoEl = document.createElement('div');
  userInfoEl.classList.add('userInfo');

  const userNameEl = document.createElement('p');
  userNameEl.classList.add('userName');
  userNameEl.textContent = `${firstName} ${lastName}`;
  userInfoEl.append(userNameEl);

  const userAgeEl = document.createElement('span');
  userAgeEl.classList.add('userAge');
  userAgeEl.textContent = age;
  userInfoEl.append(userAgeEl);

  return userInfoEl;
}

function createTrashIcon() {
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('fa-solid');
  trashIcon.classList.add('fa-trash');
  trashIcon.classList.add('trashIcon');

  function deleteUser(e) {
    e.target.closest('.userCard').remove();
  }
  trashIcon.onclick = deleteUser;
  return trashIcon;
}

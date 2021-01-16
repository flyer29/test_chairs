import './pages/main.css';
import CardList from './js/components/CardList';
import Card from './js/components/Card';
import data from './js/components/Data';
import Popup from './js/components/Popup';
import Form from './js/components/Form';

const popupElement = document.querySelector('.popup');
const formTemplate = document.querySelector('.user-form');
const template = document.querySelector('.template');
const container = document.querySelector('.cards-container');

const form = new Form(formTemplate).renderForm();
const popup = new Popup(popupElement, form);
const createCardFunction = (...arg) => new Card(template, popup).create(...arg);
const cardList = new CardList(createCardFunction, container);
cardList.renderCards(data.product);

import { Button } from "../components/Atoms/Button/Button";
import { Card } from "../components/Atoms/Card/Card";
import { Modal } from "../components/Molecules/Modal/Modal";
import { Spinner } from "../components/Atoms/Spinner/Spinner";
import { PillIcon } from "../components/Atoms/PillIcon/PillIcon";
import { PillText } from "../components/Atoms/PillText/PillText";
import { Accordion } from "../components/Molecules/Accordion/Accordion";
import { InputSearch } from "../components/Atoms/InputSearch/InputSearch";

// Importación de imágenes
import ButtonImage from "../assets/Button.jpg";
import CardImage from "../assets/Card.jpg";
import ModalImage from "../assets/Modal.jpg";
import SpinnerImage from "../assets/Spinner.png";
import PillIconImage from "../assets/PillIcon.png";
import PillTextImage from "../assets/PillText.png";
import AccordionImage from "../assets/Accordion.png";
import InputSearchImage from "../assets/InputSearch.jpg";

// Mapeo de componentes
export const componentMap = {
  Button: Button,
  Card: Card,
  Modal: Modal,
  Spinner: Spinner,
  PillIcon: PillIcon,
  PillText: PillText,
  Accordion: Accordion,
  InputSearch: InputSearch,
};

// Mapeo de imágenes
export const imageMap = {
  Button: ButtonImage,
  Card: CardImage,
  Modal: ModalImage,
  Spinner: SpinnerImage,
  PillIcon: PillIconImage,
  PillText: PillTextImage,
  Accordion: AccordionImage,
  InputSearch: InputSearchImage,
};

export default componentMap;

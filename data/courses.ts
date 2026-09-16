import type { StaticImageData } from "next/image";
import spineImage from "@/assets/images/courses-images/coloana.jpeg";
import shoulderImage from "@/assets/images/courses-images/umar.jpeg";
import kneeImage from "@/assets/images/courses-images/genunchi.jpeg";
import ankleImage from "@/assets/images/courses-images/glezna.jpeg";
import hipImage from "@/assets/images/courses-images/sold.jpeg";
import elbowImage from "@/assets/images/courses-images/cot.jpeg";
import wristAndHandImage from "@/assets/images/courses-images/incheietura-si-mana.jpeg";
import abdomenImage from "@/assets/images/courses-images/abdomen.jpeg";

export type CoursePrice = {
  amount: number;
  periodLabel: string;
};

type Course = {
  id: string;
  title: string;
  category: string;
  color: string;
  description: string;
  detail: string;
  price: CoursePrice | null;
  image: StaticImageData;
};

export const courses: readonly Course[] = [
  {
    id: "coloana",
    image: spineImage,
    price: null,
    title: "Spate și coloană",
    category: "Coloană",
    color: "#0891B2",
    description: "Redescoperă confortul în mișcările de zi cu zi.",
    detail:
      "Exerciții video dedicate zonei spatelui și coloanei, explicate pas cu pas. Consultă prezentarea din aplicație pentru conținutul și condițiile abonamentului.",
  },
  {
    id: "umar",
    image: shoulderImage,
    price: null,
    title: "Umăr",
    category: "Umăr",
    color: "#1F6FE5",
    description: "Oferă mai multă libertate fiecărei mișcări.",
    detail:
      "Un curs dedicat mișcărilor umărului, cu demonstrații video pe care le poți urmări în aplicație. Conținutul și abonamentul sunt prezentate înainte de achiziție.",
  },
  {
    id: "genunchi",
    image: kneeImage,
    price: null,
    title: "Genunchi",
    category: "Genunchi",
    color: "#0E9AA0",
    description: "Fă următorul pas cu mai multă încredere.",
    detail:
      "Descoperă în aplicație exercițiile video dedicate genunchiului și informațiile despre abonamentul pentru acest curs.",
  },
  {
    id: "glezna",
    image: ankleImage,
    price: null,
    title: "Gleznă",
    category: "Gleznă",
    color: "#5B6EF0",
    description: "Construiește o bază pentru mișcările tale.",
    detail:
      "Exerciții pentru zona gleznei, prezentate în format video. Verifică în aplicație detaliile cursului și condițiile de acces.",
  },
  {
    id: "sold",
    image: hipImage,
    price: null,
    title: "Șold",
    category: "Șold",
    color: "#2E7DF6",
    description: "Descoperă mișcările care pornesc de la șold.",
    detail:
      "Un curs dedicat șoldului, cu exerciții video și explicații pentru această zonă. Consultă în aplicație conținutul cursului și condițiile abonamentului.",
  },
  {
    id: "cot",
    image: elbowImage,
    price: null,
    title: "Cot",
    category: "Cot",
    color: "#4F5BD5",
    description: "Acordă atenție mișcărilor brațului tău.",
    detail:
      "Descoperă exercițiile video dedicate cotului, explicate pas cu pas. Informațiile despre conținut și acces sunt disponibile în aplicație, înainte de achiziție.",
  },
  {
    id: "incheietura-si-mana",
    image: wristAndHandImage,
    price: null,
    title: "Încheietură & mână",
    category: "Încheietură și mână",
    color: "#0D9488",
    description: "Mișcări mici, importante în fiecare zi.",
    detail:
      "Exerciții video pentru încheietură și mână, într-un curs dedicat acestor zone. Consultă prezentarea din aplicație pentru detalii și condițiile abonamentului.",
  },
  {
    id: "abdomen",
    image: abdomenImage,
    price: null,
    title: "Abdomen",
    category: "Abdomen",
    color: "#1D4ED8",
    description: "Adu zona abdominală în rutina ta de mișcare.",
    detail:
      "Un curs de exerciții video dedicat zonei abdominale. Descoperă în aplicație demonstrațiile, explicațiile și informațiile despre abonamentul acestui curs.",
  },
] as const;

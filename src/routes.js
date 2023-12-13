/*!

=========================================================
* Black Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import ReactTables from "views/tables/ReactTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import Calendar from "views/Calendar.js";

import Dashboard from "views/Dashboard.js";

import  OfferList from "views/tables/offertable"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Client",
    rtlName: "إستمارات",
    icon: "tim-icons icon-notes",
    state: "formsCollapse",
    views: [
      {
        path: "/react-tables",
        name: "Liste des clients",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Ajouter Client",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: Wizard,
        layout: "/admin"
      }
    ]
  },
    {
      collapse: true,
      name: "Employée",
      rtlName: "الجداول",
      icon: "tim-icons icon-puzzle-10",
      state: "tablesCollapse",
      views: [
        {
          path: "/extended-tables",
          name: "Liste des employée",
          rtlName: "جداول ممتدة",
          mini: "ET",
          rtlMini: "هور",
          component: ExtendedTables,
          layout: "/admin"
        },

      ]
    },
    {
      collapse: true,
      name: "Offres",
      rtlName: "إستمارات",
      icon: "tim-icons icon-notes",
      state: "formsCollapse",
      views: [
        {
          path: "/validation-forms",
          name: "Ajouter offre",
          rtlName: "نماذج التحقق من الصحة",
          mini: "O",
          rtlMini: "تو",
          component: ValidationForms,
          layout: "/admin"
        },
             {
          path: "/Offer-Table",
          name: "Liste des offres",
          rtlName: "جداول ممتدة",
          mini: "Offer",
          rtlMini: "هور",
          component: OfferList,
          layout: "/admin"
        },
        
      ]
    },
    // {
    //   path: "/vector-map",
    //   name: "Maps",
    //   rtlName: "لوحة القيادة",
    //   icon: "tim-icons icon-pin",
    //   component: VectorMap,
    //   layout: "/admin"
    // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   rtlName: "التقويم",
  //   icon: "tim-icons icon-time-alarm",
  //   component: Calendar,
  //   layout: "/admin"
  // }
];

export default routes;

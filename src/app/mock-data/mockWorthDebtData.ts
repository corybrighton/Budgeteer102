import { WelthPoint } from "../models/welthPoint";
import { WorthModel } from "../models/worthModel";

export const MockWorthDebtData: WorthModel =
{
  assets: [
    new WelthPoint(new Date("2021-8-1"), 48),
    new WelthPoint(new Date("2021-9-1"), 49),
    new WelthPoint(new Date("2021-12-1"), 50),
    new WelthPoint(new Date("2022-4-1"), 55),
    new WelthPoint(new Date("2022-5-1"), 48),
    new WelthPoint(new Date("2022-10-1"), 60),
    new WelthPoint(new Date("2022-11-1"), 70),
    new WelthPoint(new Date("2023-1-1"), 71),
    new WelthPoint(new Date("2023-2-1"), 80),
    new WelthPoint(new Date("2023-3-1"), 82),
    new WelthPoint(new Date("2023-4-1"), 83),
    new WelthPoint(new Date("2023-5-1"), 81),
    new WelthPoint(new Date("2023-6-1"), 85),
  ],
  
  debts:[
    new WelthPoint(new Date("2021-10-1"), 49),
    new WelthPoint(new Date("2021-11-1"), 49),
    new WelthPoint(new Date("2022-10-1"), 44),
    new WelthPoint(new Date("2022-11-1"), 43),
    new WelthPoint(new Date("2022-12-1"), 45),
    new WelthPoint(new Date("2023-1-1"), 40),
    new WelthPoint(new Date("2023-2-1"), 36),
    new WelthPoint(new Date("2023-3-1"), 38),
    new WelthPoint(new Date("2023-4-1"), 35),
    new WelthPoint(new Date("2023-5-1"), 31),
    new WelthPoint(new Date("2023-6-1"), 30),
  ]
}

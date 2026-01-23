export interface IPortfolio {
 name: string;
 time: string;
 site: string;
 technology: string[];
 des: string;
 imgs: string[];
}

const portfolios: IPortfolio[] = [
 {
  name: "The Story.",
  time: "25 december, 2016",
  site: " www.project-site.com",
  technology: ["HTML5", "CSS3", "jQuery", "Ajax"],
  des: "Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  imgs: ["project1.jpg", "project2.jpg"],
 },
 {
  name: "河南交投",
  time: "2025年9月",
  site: "http://223.85.99.73:9091/",
  technology: ["HTML5", "CSS3", "jQuery", "Ajax"],
  des: "工业无人机智慧交通行业场景打造",
  imgs: ["hnjt1.png", "hnjt2.png", "hnjt3.png", "hnjt4.png"],
 },
 {
  name: "project name3",
  time: "25 december, 2016",
  site: " www.project-site.com",
  technology: ["HTML5", "CSS3", "jQuery", "Ajax"],
  des: "Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  imgs: ["project2.jpg", "project3.jpg"],
 },
];

export default portfolios;

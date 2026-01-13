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
  name: "project name2",
  time: "25 december, 2016",
  site: " www.project-site.com",
  technology: ["HTML5", "CSS3", "jQuery", "Ajax"],
  des: "Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  imgs: ["project3.jpg"],
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

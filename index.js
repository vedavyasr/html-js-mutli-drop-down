let listHeadings = {
  Home: {
    id: "home",
    name: "home",
    children: null,
  },
  Electronics: {
    id: "electronics",
    name: "Electronics",
    children: [
      {
        Televisions: {
          id: "television",
          name: "Televisions",
          children: [
            {
              LG: {
                id: "t1",
                name: "LG",
                children: [
                  {
                    id: "lg1",
                    name: "LG1",
                    children: null,
                  },
                  {
                    id: "lg2",
                    name: "LG2",
                    children: null,
                  },
                ],
              },
            },
            {
              Samsung: {
                id: "t2",
                name: "Samsung",
                children: [
                  {
                    id: "ss1",
                    name: "SS1",
                    children: null,
                  },
                  {
                    id: "ss2",
                    name: "SS2",
                    children: null,
                  },
                ],
              },
            },
            {
              Apple: {
                id: "t3",
                name: "Apple",
                children: [
                  {
                    id: "a1",
                    name: "A1",
                    children: null,
                  },
                  {
                    id: "a2",
                    name: "A2",
                    children: null,
                  },
                ],
              },
            },
          ],
        },
        Mobiles: {
          id: "mobiles",
          name: "Mobiles",
          children: [
            {
              LGMOBILE: {
                id: "tm1",
                name: "LGMOBILE",
                children: [
                  {
                    id: "lg1",
                    name: "LGMOBILE1",
                    children: null,
                  },
                  {
                    id: "lg2",
                    name: "LGMOBILE2",
                    children: null,
                  },
                ],
              },
            },
            {
              SamsungMOBILE: {
                id: "tm2",
                name: "SamsungMOBILE",
                children: [
                  {
                    id: "ss1",
                    name: "SSMOBILE1",
                    children: null,
                  },
                  {
                    id: "ss2",
                    name: "SSMOBILE2",
                    children: null,
                  },
                ],
              },
            },
            {
              AppleMOBILE: {
                id: "tm3",
                name: "AppleMOBILE",
                children: [
                  {
                    id: "a1",
                    name: "AMOBILE1",
                    children: null,
                  },
                  {
                    id: "a2",
                    name: "AMOBILE2",
                    children: null,
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

let rootElement = document.createElement("nav");

let subRoot = document.createElement("ul");

let list = listHeadings;
function renderList(heading, root) {
  if (!heading) {
    return;
  }
  let nodes = Object.keys(heading);
    if (nodes.includes("children")) {
      nodes = ["children"];
    }
  for (let node of nodes) {
    let subList = liValues(node, nodes.includes("children"), heading);
    root.appendChild(subList);
    if (heading[node] && heading[node].children) {
      let innerRoot = document.createElement("ul");
      heading[node].children.forEach((val) => {
        renderList(val, innerRoot);
        subList.appendChild(innerRoot);
      });
    }
  }
}
renderList(list, subRoot);

function liValues(heading, isChild, list) {
  let liTag = document.createElement("LI");
  let aliTag = document.createElement("a");
  aliTag.href = "javascript:void(0)";
  aliTag.innerHTML = isChild ? list.name : heading;
  liTag.appendChild(aliTag);
  return liTag;
}
rootElement.appendChild(subRoot);
document.body.appendChild(rootElement);

document.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let subList = element.querySelector("ul");
    if (subList) {
      if (!subList.classList.contains("show-list")) {
        document
          .querySelector("ul")
          .querySelectorAll("ul")
          .forEach((tag) => {
            if (!isDescendant(tag, element)) {
              tag.classList.remove("show-list");
            }
          });
      }
      subList.classList.toggle("show-list");
    }
  });
});

function isDescendant(parent, child) {
  let node = child.parent;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parent;
  }
  return true;
}

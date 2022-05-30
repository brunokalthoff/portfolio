import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ImgSlider } from "./ImgSlider.tsx";
import { projectinfo } from "./projectinfo";

export default function CardBack({ back, setBack }) {
  const index = back - 1;
  return (
    <div className="card-back">
      <div className="arrow">
        <BsFillArrowLeftCircleFill onClick={() => setBack(null)} />
      </div>
      <div className="card-back-description">
        <h2>{projectinfo[index].h}</h2>
        <p>{projectinfo[index].pLong}</p>
      </div>

      <div className="card-back-infos">
        <div className="card-back-infos-imgslider">
          <ImgSlider back={back} />
        </div>
        <div>
          <a href={projectinfo[index].link} target="_blank" rel="noopener noreferrer">
            {/* {projectinfo[index].link} */}
            <CgWebsite /> <u>Open Website</u>
          </a>
          <a href={projectinfo[index].gh} target="_blank" rel="noopener noreferrer">
            {/* {projectinfo[index].gh} */}
            <FiGithub /> <u>See GitHub Repo</u>
          </a>
        </div>
        <div className="card-back-infos-tech">
          <h3>Technologies</h3>
          <ul>
            {projectinfo[index].tech.map((x) => (
              <p>{x}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import {
  BoxIconLine,
  Ellipsis,

} from "../../icons";

import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Link } from "react-router";

export default function EcommerceMetrics({onEdit, statusProcess,onChangeProcess,data}: {data:{name: string, status: boolean; prompt: string},onChangeProcess:()=>void,onEdit: ()=> void, statusProcess: boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  
    function toggleDropdown() {
      setIsOpen(!isOpen);
    }
  
    function closeDropdown() {
      setIsOpen(false);
    }
  
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">

      <div className=" rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
       <div className="flex"> <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>
           <div className="mt-2 ml-4 font-bold text-gray-800 text-lg dark:text-white/90">
       {data.name}
            </div>
            </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
         {data.status ? 'Agente activo' : 'Agente inactivo'}
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              4/7 
            </h4>
            <div className="text-sm text-gray-500 dark:text-gray-400">tareas completadas</div>
          </div>
          <button>
   <Ellipsis className="text-gray-800 size-6 dark:text-white/90" onClick={toggleDropdown}/>
    <div className="relative">
     <Dropdown
          isOpen={isOpen}
          onClose={closeDropdown}
          className="absolute top-0 left-5 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
        >
    
  
          <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
            <li>
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9994 19.2611H10.9294C10.4794 19.2611 10.1094 18.8911 10.1094 18.4411C10.1094 17.9911 10.4794 17.6211 10.9294 17.6211H19.9994C20.4494 17.6211 20.8194 17.9911 20.8194 18.4411C20.8194 18.9011 20.4494 19.2611 19.9994 19.2611Z" fill="currentColor"/>
<path d="M19.9994 12.9681H10.9294C10.4794 12.9681 10.1094 12.5981 10.1094 12.1481C10.1094 11.6981 10.4794 11.3281 10.9294 11.3281H19.9994C20.4494 11.3281 20.8194 11.6981 20.8194 12.1481C20.8194 12.5981 20.4494 12.9681 19.9994 12.9681Z" fill="currentColor"/>
<path d="M19.9994 6.67125H10.9294C10.4794 6.67125 10.1094 6.30125 10.1094 5.85125C10.1094 5.40125 10.4794 5.03125 10.9294 5.03125H19.9994C20.4494 5.03125 20.8194 5.40125 20.8194 5.85125C20.8194 6.30125 20.4494 6.67125 19.9994 6.67125Z" fill="currentColor"/>
<path d="M4.90969 8.03187C4.68969 8.03187 4.47969 7.94187 4.32969 7.79187L3.41969 6.88188C3.09969 6.56188 3.09969 6.04187 3.41969 5.72187C3.73969 5.40187 4.25969 5.40187 4.57969 5.72187L4.90969 6.05188L7.04969 3.91187C7.36969 3.59188 7.88969 3.59188 8.20969 3.91187C8.52969 4.23188 8.52969 4.75188 8.20969 5.07188L5.48969 7.79187C5.32969 7.94187 5.12969 8.03187 4.90969 8.03187Z" fill="currentColor"/>
<path d="M4.90969 14.3287C4.69969 14.3287 4.48969 14.2487 4.32969 14.0887L3.41969 13.1788C3.09969 12.8588 3.09969 12.3388 3.41969 12.0188C3.73969 11.6988 4.25969 11.6988 4.57969 12.0188L4.90969 12.3488L7.04969 10.2087C7.36969 9.88875 7.88969 9.88875 8.20969 10.2087C8.52969 10.5288 8.52969 11.0487 8.20969 11.3687L5.48969 14.0887C5.32969 14.2487 5.11969 14.3287 4.90969 14.3287Z" fill="currentColor"/>
<path d="M4.90969 20.3288C4.69969 20.3288 4.48969 20.2488 4.32969 20.0888L3.41969 19.1788C3.09969 18.8588 3.09969 18.3388 3.41969 18.0188C3.73969 17.6988 4.25969 17.6988 4.57969 18.0188L4.90969 18.3488L7.04969 16.2087C7.36969 15.8888 7.88969 15.8888 8.20969 16.2087C8.52969 16.5288 8.52969 17.0488 8.20969 17.3688L5.48969 20.0888C5.32969 20.2488 5.11969 20.3288 4.90969 20.3288Z" fill="currentColor"/>
</svg>
               Ver tareas
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                onItemClick={()=>{closeDropdown();onEdit()}}
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                <svg
                  className="fill-gray-500 group-hover:fill-gray-700 dark:fill-gray-400 dark:group-hover:fill-gray-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4858 3.5L13.5182 3.5C13.9233 3.5 14.2518 3.82851 14.2518 4.23377C14.2518 5.9529 16.1129 7.02795 17.602 6.1682C17.9528 5.96567 18.4014 6.08586 18.6039 6.43667L20.1203 9.0631C20.3229 9.41407 20.2027 9.86286 19.8517 10.0655C18.3625 10.9253 18.3625 13.0747 19.8517 13.9345C20.2026 14.1372 20.3229 14.5859 20.1203 14.9369L18.6039 17.5634C18.4013 17.9142 17.9528 18.0344 17.602 17.8318C16.1129 16.9721 14.2518 18.0471 14.2518 19.7663C14.2518 20.1715 13.9233 20.5 13.5182 20.5H10.4858C10.0804 20.5 9.75182 20.1714 9.75182 19.766C9.75182 18.0461 7.88983 16.9717 6.40067 17.8314C6.04945 18.0342 5.60037 17.9139 5.39767 17.5628L3.88167 14.937C3.67903 14.586 3.79928 14.1372 4.15026 13.9346C5.63949 13.0748 5.63946 10.9253 4.15025 10.0655C3.79926 9.86282 3.67901 9.41401 3.88165 9.06303L5.39764 6.43725C5.60034 6.08617 6.04943 5.96581 6.40065 6.16858C7.88982 7.02836 9.75182 5.9539 9.75182 4.23399C9.75182 3.82862 10.0804 3.5 10.4858 3.5ZM13.5182 2L10.4858 2C9.25201 2 8.25182 3.00019 8.25182 4.23399C8.25182 4.79884 7.64013 5.15215 7.15065 4.86955C6.08213 4.25263 4.71559 4.61859 4.0986 5.68725L2.58261 8.31303C1.96575 9.38146 2.33183 10.7477 3.40025 11.3645C3.88948 11.647 3.88947 12.3531 3.40026 12.6355C2.33184 13.2524 1.96578 14.6186 2.58263 15.687L4.09863 18.3128C4.71562 19.3814 6.08215 19.7474 7.15067 19.1305C7.64015 18.8479 8.25182 19.2012 8.25182 19.766C8.25182 20.9998 9.25201 22 10.4858 22H13.5182C14.7519 22 15.7518 20.9998 15.7518 19.7663C15.7518 19.2015 16.3632 18.8487 16.852 19.1309C17.9202 19.7476 19.2862 19.3816 19.9029 18.3134L21.4193 15.6869C22.0361 14.6185 21.6701 13.2523 20.6017 12.6355C20.1125 12.3531 20.1125 11.647 20.6017 11.3645C21.6701 10.7477 22.0362 9.38152 21.4193 8.3131L19.903 5.68667C19.2862 4.61842 17.9202 4.25241 16.852 4.86917C16.3632 5.15138 15.7518 4.79856 15.7518 4.23377C15.7518 3.00024 14.7519 2 13.5182 2ZM9.6659 11.9999C9.6659 10.7103 10.7113 9.66493 12.0009 9.66493C13.2905 9.66493 14.3359 10.7103 14.3359 11.9999C14.3359 13.2895 13.2905 14.3349 12.0009 14.3349C10.7113 14.3349 9.6659 13.2895 9.6659 11.9999ZM12.0009 8.16493C9.88289 8.16493 8.1659 9.88191 8.1659 11.9999C8.1659 14.1179 9.88289 15.8349 12.0009 15.8349C14.1189 15.8349 15.8359 14.1179 15.8359 11.9999C15.8359 9.88191 14.1189 8.16493 12.0009 8.16493Z"
                    fill=""
                  />
                </svg>
              Editar
              </DropdownItem>
            </li>
            <li>
              <DropdownItem
                 onItemClick={ onChangeProcess}
             
                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
             {!statusProcess ?   (<><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
</svg>Iniciar</>):(<><svg width="24px" height="24px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6.42004C10 4.76319 8.65685 3.42004 7 3.42004C5.34315 3.42004 4 4.76319 4 6.42004V18.42C4 20.0769 5.34315 21.42 7 21.42C8.65685 21.42 10 20.0769 10 18.42V6.42004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 6.42004C20 4.76319 18.6569 3.42004 17 3.42004C15.3431 3.42004 14 4.76319 14 6.42004V18.42C14 20.0769 15.3431 21.42 17 21.42C18.6569 21.42 20 20.0769 20 18.42V6.42004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Pausar</>)}
              </DropdownItem>
            </li>
          </ul>
          <a
            className="flex items-center gap-3 px-4 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          >
        <svg width="24px" height="24px" viewBox="0 0 512 512" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">  <g id="Layer_1"/> <g id="Layer_2"> <g> <path className="st0" d="M274.91,47.78c-97.6,0-179.71,67.5-202.15,158.26L58.79,181.4c-4.36-7.69-14.12-10.39-21.81-6.03 c-7.69,4.36-10.39,14.12-6.03,21.81l37.66,66.44c0,0,0,0.01,0.01,0.01l0.15,0.26c0.19,0.34,0.39,0.66,0.6,0.98 c0.01,0.01,0.02,0.03,0.03,0.04c0.04,0.07,0.09,0.13,0.14,0.19c0.23,0.33,0.46,0.64,0.71,0.95c0.04,0.05,0.07,0.1,0.11,0.15 c0,0,0,0.01,0.01,0.01c0.02,0.02,0.04,0.04,0.06,0.07c0.36,0.44,0.75,0.85,1.15,1.24c0.04,0.04,0.07,0.07,0.11,0.1 c0.25,0.23,0.5,0.46,0.76,0.67c0.05,0.04,0.1,0.08,0.15,0.12c0.35,0.28,0.71,0.55,1.08,0.81c0.03,0.02,0.06,0.04,0.09,0.06 c0.17,0.11,0.35,0.22,0.52,0.33c0.09,0.06,0.18,0.11,0.28,0.17c0.12,0.07,0.25,0.14,0.38,0.21c0.11,0.06,0.22,0.12,0.33,0.17 c0.2,0.1,0.39,0.2,0.59,0.3c0.11,0.05,0.22,0.1,0.33,0.15c0,0,0.01,0,0.01,0.01c0.12,0.05,0.24,0.11,0.36,0.16 c0.33,0.14,0.66,0.26,1,0.37c0.04,0.02,0.09,0.03,0.13,0.04c0.02,0.01,0.03,0.01,0.05,0.02c0.15,0.05,0.31,0.09,0.47,0.14 c0.29,0.09,0.59,0.16,0.89,0.23c0.08,0.02,0.15,0.04,0.23,0.06c0.07,0.02,0.14,0.03,0.22,0.05c0.44,0.09,0.89,0.15,1.33,0.2 c0.04,0,0.07,0.01,0.11,0.02c0.08,0.01,0.15,0.01,0.23,0.02c0.49,0.05,0.98,0.08,1.48,0.08c0.42,0,0.84-0.02,1.26-0.06 c0.07-0.01,0.14-0.01,0.21-0.02c0.01,0,0.03,0,0.04,0c0.06-0.01,0.12-0.01,0.19-0.02c0.28-0.03,0.55-0.07,0.83-0.11 c0.08-0.01,0.16-0.02,0.24-0.04c0.13-0.02,0.25-0.04,0.38-0.07c0.06-0.01,0.12-0.03,0.19-0.04c0.4-0.09,0.81-0.19,1.21-0.31 c0.1-0.03,0.2-0.06,0.3-0.09c0.11-0.03,0.21-0.07,0.32-0.11c0.14-0.05,0.28-0.1,0.42-0.15c0.17-0.06,0.33-0.12,0.5-0.19 c0.1-0.04,0.2-0.09,0.3-0.13c0.13-0.06,0.26-0.12,0.39-0.18c0.19-0.09,0.37-0.19,0.56-0.28c0.13-0.07,0.25-0.13,0.38-0.2 c0.28-0.15,0.55-0.33,0.82-0.5c0.15-0.09,0.3-0.18,0.45-0.28c0.06-0.04,0.11-0.08,0.17-0.12c0.17-0.12,0.34-0.25,0.5-0.38 c0.06-0.04,0.12-0.09,0.18-0.13c0.11-0.09,0.23-0.17,0.34-0.26c0,0,0.01-0.01,0.01-0.01l59.04-48.93 c6.8-5.64,7.75-15.72,2.11-22.53c-5.64-6.8-15.73-7.75-22.53-2.11l-28.84,23.9c17.18-79.28,87.87-138.87,172.22-138.87 c97.17,0,176.22,79.05,176.22,176.22s-79.05,176.22-176.22,176.22c-8.84,0-16,7.16-16,16s7.16,16,16,16 c114.81,0,208.22-93.41,208.22-208.22S389.72,47.78,274.91,47.78z"/> <path className="st0" d="M274.91,147.61c-8.84,0-16,7.16-16,16V256c0,8.84,7.16,16,16,16h75.87c8.84,0,16-7.16,16-16s-7.16-16-16-16 h-59.87v-76.39C290.91,154.77,283.74,147.61,274.91,147.61z"/> </g> </g> </g>

</svg>
            Reiniciar
          </a>
        </Dropdown>
        </div>
   </button>
        </div>
       
      </div>
 
    </div>
  );
}

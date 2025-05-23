
import { useState } from 'react';
import PageMeta from '../../components/common/PageMeta';
import EcommerceMetrics from '../../components/ecommerce/EcommerceMetrics';
import { Modal } from '../../components/ui/modal';
import { useModal } from '../../hooks/useModal';
import {PlusIcon} from './../../icons/'
    
const Agents = () => {
   
    const { isOpen, openModal, closeModal } = useModal();
   
   const [process, setProcess] = useState(false);

   const handleToggleProcess = () => {
    setProcess(!process)
   }

   const [
    agentData,
    setAgentData
    ]= useState({
    name: 'Closer de Workana',
    prompt: 'Agendar clientes en workana, enviarles solicitud de mensaje, llevarlos a una meet',
    status: process,
   });

   const [preSaveAgentData,setPreSaveAgentData] = useState(agentData)

   const handleSaveAgentData = () => {
     setAgentData(preSaveAgentData);
     closeModal();
   }

   const handleResetAgentData = () =>{
      setPreSaveAgentData(agentData)
   }

   const handleCloseModal = () =>{handleResetAgentData(); closeModal()}
 return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
       <Modal
                isOpen={isOpen}
                onClose={handleCloseModal}
                className="max-w-[700px] p-6 lg:p-10"
              >
                <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
                  <div>
                    <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
                      {'Editar rutina'}
                    </h5>
    <p className="text-sm text-gray-500 dark:text-gray-400">
                 Escribe aqui el nombre de tu asistente
                    </p>
                      <div className="mt-3 "></div>
                    
                       <input
                       value={preSaveAgentData.name}
                      type='text'
                          id="event-title"
                          placeholder="Escribe la lista de tareas que deseas realizar"
                         onChange={(e) => 
                          {
                           setPreSaveAgentData({...preSaveAgentData, name: e.target.value})
                          }
                          }
                          className="dark:bg-dark-900 h-11 w-full mb-3 rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                 Escribe aqui el prompt para automatizar las tareas de tu asistente
                    </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <div>
                
                        <textarea
                      
                          id="event-title"
                          placeholder="Escribe la lista de tareas que deseas realizar"
                          onChange={(e) => 
                          {
                          setPreSaveAgentData({...preSaveAgentData, prompt: e.target.value})
                          }
                          }
                          className="dark:bg-dark-900 h-11 w-full h-[300px] rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        >
                          {agentData.prompt}
                  </textarea>
                      </div>
                    </div>
              
                  
      
                  </div>
                  <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                    >
                      Cancelar
                    </button>
                    <button
                     onClick={handleSaveAgentData}
                      type="button"
                      className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                    >
                     Guardar
                    </button>
                  </div>
                </div>
              </Modal>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics data={agentData} onEdit={openModal} statusProcess={process} onChangeProcess={handleToggleProcess}/>

        </div>

      <button
  className="
    w-13 h-13
    fixed 
    bottom-4 right-4 
    flex items-center justify-center 
    rounded-full shadow-md 
    bg-white text-black 
    dark:bg-gray-800 dark:text-white 
    hover:bg-gray-100 dark:hover:bg-gray-700
  "
>
<PlusIcon color={"gray"} fontSize={18}></PlusIcon>
</button>

      </div>
    </>
  );
}

export default Agents
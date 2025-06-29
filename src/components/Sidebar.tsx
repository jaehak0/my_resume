import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className='sidebar'>
      {/* Contact Info */}
      <div className='sidebar-section' id='contact'>
        <h3 className='sidebar-title'>📞 연락처</h3>
        <div className='flex flex-col gap-4'>
          <a href='mailto:jack1087902@gmail.com' className='contact-item'>
            📧 jack1087902@gmail.com
          </a>
          <a href='https://github.com/jaehak0' className='contact-item'>
            💻 GitHub
          </a>
          <a
            href='https://curse-swordtail-eb6.notion.site/91a958c8e09441b2b5297a672b81d0db'
            className='contact-item'
          >
            📝 개발 학습 노트
          </a>
        </div>
      </div>

      {/* Skills Summary */}
      <div className='sidebar-section' id='skills'>
        <h3 className='sidebar-title'>🛠️ 핵심 기술</h3>

        <div className='skill-category'>
          <h4 className='skill-category-title'>🤖 AI/ML</h4>
          <div className='skill-items'>
            <span className='skill-tag'>LLaMA 3.2</span>
            <span className='skill-tag'>LangGraph</span>
            <span className='skill-tag'>LoRA</span>
            <span className='skill-tag'>WandB</span>
            <span className='skill-tag'>RunPod</span>
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>⚡ Backend</h4>
          <div className='skill-items'>
            <span className='skill-tag'>FastAPI</span>
            <span className='skill-tag'>Spring Boot</span>
            <span className='skill-tag'>MySQL</span>
            <span className='skill-tag'>ChromaDB</span>
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>💻 Frontend</h4>
          <div className='skill-items'>
            <span className='skill-tag'>React</span>
            <span className='skill-tag'>TypeScript</span>
            <span className='skill-tag'>Tailwind</span>
            <span className='skill-tag'>Vite</span>
          </div>
        </div>

        <div className='skill-category'>
          <h4 className='skill-category-title'>📊 Data</h4>
          <div className='skill-items'>
            <span className='skill-tag'>Python</span>
            <span className='skill-tag'>NumPy</span>
            <span className='skill-tag'>Pandas</span>
            <span className='skill-tag'>t-SNE</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

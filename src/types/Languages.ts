// types.ts
export interface Language {
  navbar: {
    Projetos: string;
    Sobre: string;
    Contato: string;
    Idioma: string;
    MenuIdioma: {
      Portugues: string;
      English: string;
      Español: string;
    };
    Login: string;
  };
  hero: {
    olaMundo: string;
    euSou: string;
    nome: string;
    descricao: string;
    Modal: {
      modalTrigger: string;
      modalContentTitle: string;
      modalContentTitleSpan: string;
      modalContentInstructionSpan1: string;
      modalContentInstructionSpan2: string;
      modalContentInstructionSpan3: string;
      modalContentInstructionSpan4: string;
      modalContentInstruction: string;
      modalFooterExit: string;
      modalFooterSendMessage: string;
    };
  };
  Languages: {
    title: string;
  };
  Projetos: {
    title: string;
    description: string;
    CardAc: {
      option1: string;
      option2: string;
    };
    Card1: {
      title: string;
      description: string;
    };
    Card2: {
      title: string;
      description: string;
    };
    Card3: {
      title: string;
      description: string;
    };
  };
  About: {
    title: string;
    description: string;
    question: string;
    "question-span": string;
    "about-me": string;
  };
  Questions: {
    title: string;
    QuestionsFeed: Array<{
      id: number;
      Question: string;
      Response: string;
    }>;
  };
  Contato: {
    title: string;
    description: string;
    option1: string;
    option2: string;
    btnlogin: string;
    placeholder1: string;
    placeholder2: string;
    btnsend: string;
  };
}

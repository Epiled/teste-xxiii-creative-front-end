import { createContext, ReactNode, useState } from "react";

// Cria o contexto com o tipo apropriado
export const ProfileImageContext = createContext<{
  profileImg: string; // Altere para usar 'profileImg' para manter a consistência
  setProfileImg: (img: string) => void; // Função para atualizar a imagem
}>({
  profileImg: '/images/modelo-1.png', // Valor inicial
  setProfileImg: () => {}, // Função vazia como valor padrão
});

// Provedor do contexto
export const ProfileImageContextProvider = ({ children }: { children: ReactNode }) => {
  const [profileImg, setProfileImg] = useState<string>('/images/modelo-1.png'); // Valor inicial da imagem

  return (
    <ProfileImageContext.Provider value={{ profileImg, setProfileImg }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

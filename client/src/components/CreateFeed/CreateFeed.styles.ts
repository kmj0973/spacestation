import styled from "styled-components";

export const Container = styled.div`
  font-size: ${({ theme }) => theme.size.md}px;
  max-width: ${({ theme }) => theme.size.maxWidth}px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageContainer = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid ${({ theme }) => theme.colors.contextBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FeedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const FeedImageEmpty = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textDisable};
`;

export const ImagePreveiwContainer = styled.form`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const InputImage = styled.input`
  display: none;
`;

export const InputImageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.deepback};
  border-radius: 3px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.colors.deepback};
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  overflow: auto;
`;

export const ImagePreviewList = styled.div`
  position: relative;
  margin-right: 15px;
`;

export const ImagePreview = styled.img`
  width: 75px;
  height: 75px;
  object-fit: contain;
  object-position: center;
`;

export const ImageDeleteButton = styled.button`
  position: absolute;
  right: -4px;
  top: -2px;
  padding: 0;
  width: 20px;
  height: 20px;
  appearance: none;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.point};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    color: #fff;
  }
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.size.md}px;
  margin-bottom: 5px;
`;

export const Textarea = styled.textarea`
  width: 350px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.contextBorder};
`;

export const CategoryContainer = styled.div`
  width: 350px;
  margin-bottom: 20px;
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 5px;
`;

export const CategoryItem = styled.div<{
  $isActive: boolean;
  $fontColor: string;
}>`
  color: ${(props) => (props.$isActive ? "white" : "black")};
  background-color: ${(props) =>
    props.$isActive ? props.$fontColor : "#F9F1E9"};
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:active {
    transform: scale(1.1);
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  width: 350px;
  padding-bottom: 20px;
  gap: 8px;
`;

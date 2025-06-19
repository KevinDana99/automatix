import {
  BoxContainer,
  Container,
  Header,
  IconWrapper,
  InputContainer,
  InputGroup,
  InputWrapper,
  ItemDetails,
  ItemName,
  LabelContainer,
  LogoContainer,
  PayButton,
  PayButtonLink,
  StyledCopyIcon,
  StyledEyeCloseIcon,
  StyledEyeIcon,
  StyledInput,
} from "./styled";
import useDetails from "./hooks/useDetails";
import { Meet } from "./../../icons/";

import { useTailwindDarkMode } from "./hooks/useDarkMode";
import { useDownloadComponent } from "./hooks/useDownloadComponent";
import { useState } from "react";

const DetailsCompoenent = ({
  onDownloadComponent,
  handleUpdateUri,
  handleUpdateDate,
  handleUpdateTime,
  form,
  encrypt,
  handleToggleCripto,
  editForm,
}: {
  onDownloadComponent?: () => void;
  handleUpdateUri: (input: string) => void;
  handleUpdateTime: (input: string) => void;
  handleUpdateDate: (input: string) => void;
  handleToggleCripto: () => void;
  encrypt: boolean;
  editForm: boolean;
  form: {
    date: string;
    time: string;
    uri: string;
  };
}) => {
  const { handleCopyToClipboard } = useDetails();
  const isDarkMode = useTailwindDarkMode();
  const theme = isDarkMode ? "dark" : "light";

  return (
    <Container>
      <Header></Header>
      <BoxContainer>
        <LogoContainer>
          <Meet fontSize={200} />
        </LogoContainer>
        <LabelContainer theme={theme} className="hidden-capture">
          <ItemDetails>
            <ItemName>Reunion</ItemName>
          </ItemDetails>
        </LabelContainer>

        <InputContainer className="hidden-capture">
          <InputWrapper>
            <InputGroup>
              <StyledInput
                className="input"
                type="text"
                placeholder="https://meet.google.com/hup-ayjx-riv"
                value={encrypt ? form.uri : atob(form.uri)}
                onClick={handleCopyToClipboard}
                onChange={(e) =>
                  editForm ? handleUpdateUri(e.target.value) : null
                }
              />
              <IconWrapper
                data-icon="User"
                data-size="24px"
                data-weight="regular"
              >
                <StyledCopyIcon />
                {encrypt ? (
                  <StyledEyeIcon
                    id="eye"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleCripto();
                    }}
                  />
                ) : (
                  <StyledEyeCloseIcon
                    id="eye"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleCripto();
                    }}
                  />
                )}
              </IconWrapper>
            </InputGroup>
          </InputWrapper>
        </InputContainer>
        <LabelContainer theme={theme} className="hidden-capture">
          <ItemDetails>
            <ItemName>Fecha</ItemName>
          </ItemDetails>
        </LabelContainer>

        <InputContainer className="hidden-capture">
          <InputWrapper>
            <InputGroup>
              <StyledInput
                className="input"
                type="date"
                value={form.date}
                onClick={handleCopyToClipboard}
                onChange={(e) =>
                  editForm ? handleUpdateDate(e.target.value) : null
                }
                readOnly={!editForm}
              />
              <IconWrapper
                data-icon="User"
                data-size="24px"
                data-weight="regular"
              >
                <StyledCopyIcon />
              </IconWrapper>
            </InputGroup>
          </InputWrapper>
        </InputContainer>
        <LabelContainer theme={theme} className="hidden-capture">
          <ItemDetails>
            <ItemName>Hora</ItemName>
          </ItemDetails>
        </LabelContainer>

        <InputContainer className="hidden-capture">
          <InputWrapper>
            <InputGroup>
              <StyledInput
                className="input"
                type="time"
                min="06:00"
                max="22:00"
                readOnly={!editForm}
                value={form.time}
                onClick={handleCopyToClipboard}
                onChange={(e) =>
                  editForm ? handleUpdateTime(e.target.value) : null
                }
              />
              <IconWrapper
                data-icon="User"
                data-size="24px"
                data-weight="regular"
              >
                <StyledCopyIcon />
              </IconWrapper>
            </InputGroup>
          </InputWrapper>
        </InputContainer>
        {editForm ? (
          <PayButton onClick={onDownloadComponent}>Obtener reunion</PayButton>
        ) : (
          <PayButtonLink id="linkButton" onClick={onDownloadComponent}>
            Acceder a la reunion
          </PayButtonLink>
        )}
      </BoxContainer>
    </Container>
  );
};
const Details = () => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    uri: btoa(""),
  });

  const handleUpdateUri = (input: string) => {
    setForm({ ...form, uri: btoa(input.trim()) });
  };

  const handleUpdateDate = (input: string) => {
    setForm({ ...form, date: input });
  };

  const handleUpdateTime = (input: string) => {
    setForm({ ...form, time: input });
  };

  const [encrypt, setEncrypt] = useState(false);
  const handleToggleCripto = () => {
    setEncrypt(!encrypt);
  };
  const { handleDownloadComponent } = useDownloadComponent(
    <DetailsCompoenent
      editForm={false}
      handleUpdateUri={handleUpdateUri}
      handleUpdateDate={handleUpdateDate}
      handleUpdateTime={handleUpdateTime}
      form={form}
      encrypt={encrypt}
      handleToggleCripto={handleToggleCripto}
    />
  );
  return (
    <DetailsCompoenent
      editForm={true}
      encrypt={encrypt}
      handleToggleCripto={handleToggleCripto}
      form={form}
      onDownloadComponent={handleDownloadComponent}
      handleUpdateUri={handleUpdateUri}
      handleUpdateDate={handleUpdateDate}
      handleUpdateTime={handleUpdateTime}
    />
  );
};

export default Details;

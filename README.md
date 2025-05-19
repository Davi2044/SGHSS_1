# SGHSS – Sistema de Gestão Hospitalar e de Serviços de Saúde

Este projeto é um sistema back-end para gestão de pacientes, profissionais de saúde, agendamentos e prontuários, com autenticação via JWT, arquitetura RESTful e integração com banco de dados online (MongoDB Atlas). Criado para fins acadêmicos no Projeto Multidisciplinar 2025A1 – UNINTER.

---

## 🚀 Tecnologias utilizadas

- Node.js + Express
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Replit (Execução)
- Postman Web (Testes)

---

## 📦 Funcionalidades implementadas

- Cadastro e login de usuários (admin, paciente, profissional)
- Cadastro/listagem de pacientes
- Cadastro/listagem/remoção de profissionais
- Agendamento, listagem e cancelamento de consultas
- Autenticação via JWT e controle de acesso por perfil
- Organização em MVC (Model, View, Controller)

---

## ⚙️ Como executar o projeto no Replit

### 1. 🔁 Clone este repositório no GitHub

Clique em **Fork** ou copie o link do repositório:

```
https://github.com/seu-usuario/SGHSS.git
```

### 2. 🌐 Vá para [Replit](https://replit.com/)

1. Clique em **Create Repl**
2. Selecione **Import from GitHub**
3. Cole o link do repositório clonado
4. Aguarde o carregamento do projeto

---

## 🔐 Configuração do banco de dados (MongoDB Atlas)

1. Crie uma conta gratuita em [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie um cluster gratuito
3. Crie um banco chamado `SGHSS`
4. Crie um usuário com `admin` e senha `admin` (ou outro)
5. Vá em **Network Access** e adicione IP: `0.0.0.0/0`
6. Copie sua **connection string** e substitua em `.env`:

### Arquivo `.env`:
```
PORT=3000
MONGODB_URI=mongodb+srv://admin:admin@cluster0.j1oehad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET=sua_chave_secreta_segura
//Ou preenche-lo com as informações do seu cluster do MONGODB
```

---

## ▶️ Executar no Replit

1. Após configurar o `.env`, clique em **Run**
2. Você verá no console:
```
Servidor rodando na porta 3000
Conectado ao MongoDB Atlas
```

3. Copie o link público exibido (ex: `https://sg-hss.replit.app`) para usar no Postman

---

## 🧪 Testar com Postman Web

1. Acesse: [https://postman.com](https://www.postman.com/)
2. Use os seguintes endpoints (com método `POST`, `GET`, etc):

### Exemplos:

#### 🔐 Login (gera token):
```
POST /api/auth/login
```
```json
{
  "email": "admin@email.com",
  "senha": "admin123"
}
```

#### 👤 Cadastrar paciente:
```
POST /api/pacientes
```
Header:
```
Authorization: Bearer <seu_token_jwt>
```

---

## 📁 Estrutura de Pastas

```
SGHSS/
├── models/
├── controllers/
├── routes/
├── middlewares/
├── .env
├── server.js
├── package.json
```

---

## 🛠️ Recomendações

- Após usar a rota `/api/auth/limpar`, remova-a do projeto
- Não exponha senhas reais ou tokens em repositórios públicos
- Use o Postman para simular usuários com perfis diferentes (admin, paciente, profissional)

---

## 📚 Autoria

Desenvolvido como parte do Projeto Multidisciplinar – UNINTER 2025A1.  
Autor: [Seu Nome]  
Orientador(a): [Nome do Tutor ou Professor]

---

## 📜 Licença

Este projeto está licenciado para fins acadêmicos e educacionais.

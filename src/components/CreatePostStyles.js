import { makeStyles } from '@material-ui/core/styles';

const font = "'Poppins', sans-serif";

export default makeStyles((theme) => ({
  form: {
    flexGrow: 1,
    align: 'center',
    margin: "2% 15% 10% 15%",
    textAlign: 'center',
    fontFamily: font,
  },
  formTitle: {
    color: "#ed7311",
    flex: 1,
    textAlign: 'left',
    marginLeft: "5%",
  },
  formHead: {
   flexDirection:"row",
   alignItems:"flex-start",
   display:"flex",
  },
  boxAlign: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: "5%",
    marginLeft: "5%",
  },
  title: {
    fontFamily: font,
    marginTop: "1%",
  },
  textEditor: {
  },
  submitBtn: {
    backgroundColor: "#ed7311",
    color: "white",
    marginTop:"2%",
    marginRight:"5%",
    fontFamily: font,
    cursor: "pointer",
    '&:hover': {
      background: "#f2f3f3",
      color: "#ed7311",
    },
  },
}));

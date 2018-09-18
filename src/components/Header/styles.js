export default {
    root: {
        width: '100%',
        height: 60
    },
    inner: {
        //width: '100%',
        maxWidth: '1440px',
        padding: '0 60px',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 auto'
    },
    menu: {
        alignItems: 'center',
        color: 'grey',
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
    ,
    item: {
        fontSize: '12px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '0 10px',
        //color: 'white',
        textTransform: 'uppercase',
        '& a': {
            color: 'inherit',
            /*height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '& .title_text': {
                height: '20px'
            },*/
            '&.active' : {
                textDecoration: 'none'
            }
        }
    }
    ,
    logo: {
        '& h1': {
            marginBottom: '0'
        },
        '& img': {
            maxHeight: '100px'
        }
    }
};

import * as React from 'react';
import { useSelector } from 'react-redux';
import * as ui from '../../ui-ittyni/src'
import {Countries} from './countries'

export const Profile: React.FC<any> = (props) => {
    const { isAuth, email, fname, lname, picture } = useSelector(({ Auth }: any) => Auth.login)
    // 
    const [Info, setInfo] = React.useState<boolean>(false)
    return (<>
        {!Info && <ui.ProfileContainer>
            
                {/* side menu */}
            <ui.ProfileInfo>
                <div><img src={picture} /></div>
                <div>
                    <div>{fname} {lname}</div>
                    <div>{email} <small>verified</small></div>
                </div>
            </ui.ProfileInfo>
            {/* data screen */}
            <ui.ProfileForm onClick={e=>setInfo(!Info)}>
                Information personelle
            </ui.ProfileForm>
            <h2 style={{background:"inherit"}}>
                Vous Etes un professionelle de sante ?
            </h2>
            <div style={{background:"inherit", display:"grid", gridTemplateColumns:"auto auto", columnGap:"10px"}}>
                <ui.ButtonChoice disabled>Oui</ui.ButtonChoice>
                <ui.ButtonChoice disabled>Non</ui.ButtonChoice>
            </div>
            <ui.ProfileForm>
                Education
            </ui.ProfileForm>
            <ui.ProfileForm>
                Experience
            </ui.ProfileForm>
            <ui.ProfileForm>
                Avez-vous un Cabinet ?
            </ui.ProfileForm>
            <ui.ProfileForm>
                Ajouter votre Cabinet
            </ui.ProfileForm>
            <ui.ProfileForm>
                Ajouter votre Dossier
            </ui.ProfileForm>            
        </ui.ProfileContainer>}
        {Info && <UserInfo close={Info} setClose={setInfo}/>}
    </>);
};

export const UserInfo: React.FC<any>=({close, setClose})=>{
    const [male, setmale] = React.useState<boolean>(false);
    const [female, setfemale] = React.useState<boolean>(false);

    return(
        <ui.ProfileContainer>
            <h2 style={{background:"inherit", padding:"15px 0", borderBottom:"1px solid"}}>Info Personelle</h2>
            <div style={{display:"grid", gridTemplateRows:"auto auto auto", rowGap:"20px", padding:"15px"}}>
                <span style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
                    Genre : <ui.BubbleRadio onClick={e=>{setmale(!male); setfemale(false)}} selected={male}>Homme</ui.BubbleRadio>
                    <ui.BubbleRadio onClick={e=>{setfemale(!female); setmale(false)}} selected={female}>Femme</ui.BubbleRadio>
                </span>
                <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>Nom : <input style={{padding: "5px"}}/></span>
                <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>Prenom : <input style={{padding: "5px"}}/></span>
            </div>
            <h2 style={{background:"inherit", padding:"15px 0", borderBottom:"1px solid"}}>Contact</h2>
            <div style={{display:"grid", gridTemplateRows:"auto auto auto", rowGap:"20px", padding:"15px"}}>                
                <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>Pays : <Countries /></span>
                <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>Ville : <input style={{padding: "5px"}}/></span>
                <span style={{display:"grid", gridTemplateColumns:"auto auto"}}>Phone : <input style={{padding: "5px"}}/></span>
            </div>

            <div style={{background:"inherit", display:"grid", gridTemplateColumns:"auto auto", columnGap:"10px"}}>
                <ui.ButtonChoice onClick={e=>setClose(!close)}>Annuler</ui.ButtonChoice>
                <ui.ButtonChoice disabled>Modifier</ui.ButtonChoice>
            </div>
        </ui.ProfileContainer>
    )
}
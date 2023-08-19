export const Reducer=(state,action)=>{
    switch (action.type) {
        case 'add_to_edu':
            console.log('done')
            
            return{...state,educatin:[...state.educatin,{...action.payload}]};
            
        case 'add_to_experience':
            console.log('done')
            return{...state,experience:[...state.experience,{...action.payload}]};
        case 'add_to_skills':
            console.log('done')
            return{...state,skills:[...state.skills,...action.payload]};
        case 'add_to_projects':
            console.log('done')
            return{...state,projects:[...state.projects,{...action.payload}]};
        case 'add_to_certificates':
            console.log('done')
            return{...state,certificates:[...state.certificates,{...action.payload}]};
        case 'add_to_info':
            console.log('done')
            return{...state,info:[...state.info,{...action.payload}]};
    
        default:
            return state;
    }
}
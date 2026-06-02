import { importShared } from './__federation_fn_import-BMMB1g9W.js';

const plusWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const plusBlack = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$8 = {  };
const {createElementVNode:_createElementVNode$9,openBlock:_openBlock$9,createElementBlock:_createElementBlock$9} = await importShared('vue');


const _hoisted_1$8 = { class: "starbar" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$9(), _createElementBlock$9("div", _hoisted_1$8, _cache[0] || (_cache[0] = [
    _createElementVNode$9("div", { class: "left-bar" }, null, -1),
    _createElementVNode$9("p", null, "⭐️", -1),
    _createElementVNode$9("div", { class: "right-bar" }, null, -1)
  ])))
}
const StarBar = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render',_sfc_render],['__scopeId',"data-v-3600db60"]]);

// tableau de types de listes disponibles

const typeTask = [

  {
    type: 'daily',
    label: 'quotidiennes',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M320%2064C461.4%2064%20576%20178.6%20576%20320C576%20461.4%20461.4%20576%20320%20576C178.6%20576%2064%20461.4%2064%20320C64%20178.6%20178.6%2064%20320%2064zM296%20184L296%20320C296%20328%20300%20335.5%20306.7%20340L402.7%20404C413.7%20411.4%20428.6%20408.4%20436%20397.3C443.4%20386.2%20440.4%20371.4%20429.3%20364L344%20307.2L344%20184C344%20170.7%20333.3%20160%20320%20160C306.7%20160%20296%20170.7%20296%20184z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/apptask-dist/assets/img-daily-C93AaCmf.png", import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien.'
  },
  {
    type: 'weekly',
    label: 'hebdo',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M224%2064C241.7%2064%20256%2078.3%20256%2096L256%20128L384%20128L384%2096C384%2078.3%20398.3%2064%20416%2064C433.7%2064%20448%2078.3%20448%2096L448%20128L480%20128C515.3%20128%20544%20156.7%20544%20192L544%20480C544%20515.3%20515.3%20544%20480%20544L160%20544C124.7%20544%2096%20515.3%2096%20480L96%20192C96%20156.7%20124.7%20128%20160%20128L192%20128L192%2096C192%2078.3%20206.3%2064%20224%2064zM160%20304L160%20336C160%20344.8%20167.2%20352%20176%20352L208%20352C216.8%20352%20224%20344.8%20224%20336L224%20304C224%20295.2%20216.8%20288%20208%20288L176%20288C167.2%20288%20160%20295.2%20160%20304zM288%20304L288%20336C288%20344.8%20295.2%20352%20304%20352L336%20352C344.8%20352%20352%20344.8%20352%20336L352%20304C352%20295.2%20344.8%20288%20336%20288L304%20288C295.2%20288%20288%20295.2%20288%20304zM432%20288C423.2%20288%20416%20295.2%20416%20304L416%20336C416%20344.8%20423.2%20352%20432%20352L464%20352C472.8%20352%20480%20344.8%20480%20336L480%20304C480%20295.2%20472.8%20288%20464%20288L432%20288zM160%20432L160%20464C160%20472.8%20167.2%20480%20176%20480L208%20480C216.8%20480%20224%20472.8%20224%20464L224%20432C224%20423.2%20216.8%20416%20208%20416L176%20416C167.2%20416%20160%20423.2%20160%20432zM304%20416C295.2%20416%20288%20423.2%20288%20432L288%20464C288%20472.8%20295.2%20480%20304%20480L336%20480C344.8%20480%20352%20472.8%20352%20464L352%20432C352%20423.2%20344.8%20416%20336%20416L304%20416zM416%20432L416%20464C416%20472.8%20423.2%20480%20432%20480L464%20480C472.8%20480%20480%20472.8%20480%20464L480%20432C480%20423.2%20472.8%20416%20464%20416L432%20416C423.2%20416%20416%20423.2%20416%20432z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/apptask-dist/assets/img-weekly-C73XRmtS.png", import.meta.url).href,
    color: 'var(--light-beige)',
    description: 'Une liste pour organiser vos tâches de la semaine. Elle se réinitialise chaque lundi.'

  }

];

const whitecheck = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e";

const dailyTaskList = [
      {
      "category": "hygiene",
      "tasks": [
        { "name": "wake_up", "label": "programmer l'alarme", "source": new URL("/apptask-dist/assets/reveil-XG1-hd0k.png", import.meta.url) },
        { "name": "wash_hands_morning", "label": "Se laver les mains (matin)", "source": new URL("/apptask-dist/assets/mains-BjVJyqsU.png", import.meta.url) },
        { "name": "brush_teeth_morning", "label": "Se brosser les dents (matin)", "source": new URL("/apptask-dist/assets/dents-CAukcV5-.png", import.meta.url) },
        { "name": "shower", "label": "Prendre une douche", "source": new URL("/apptask-dist/assets/douche-B0vpeP-A.png", import.meta.url) },
        { "name": "apply_deodorant", "label": "Mettre du déodorant", "source": new URL("/apptask-dist/assets/deodorant-ybRkL-CR.png", import.meta.url) },
        { "name": "apply_skincare", "label": "Appliquer des soins de la peau", "source": new URL("/apptask-dist/assets/peau-ByXfp7vv.png", import.meta.url) },
        { "name": "apply_perfume", "label": "Mettre du parfum", "source": new URL("/apptask-dist/assets/parfum-CLyVV224.png", import.meta.url) },
        { "name": "comb_hair", "label": "Se coiffer", "source": new URL("/apptask-dist/assets/cheveux-BMlVD4_5.png", import.meta.url) },
        { "name": "makeup", "label": "Se maquiller", "source": new URL("/apptask-dist/assets/maquillage-CTuXuMGP.png", import.meta.url) },
        { "name": "jewelry", "label": "Mettre des bijoux", "source": new URL("/apptask-dist/assets/bijoux-DJN9PpV3.png", import.meta.url) },
        { "name": "remove_makeup", "label": "Se démaquiller", "source": new URL("/apptask-dist/assets/demaquiller-3BzPjC9z.png", import.meta.url) },
        { "name": "cut_nails_check", "label": "Vérifier / entretenir les ongles", "source": new URL("/apptask-dist/assets/ongles-CfdnLdCJ.png", import.meta.url) },
        { "name": "shave_or_groom", "label": "Se raser / entretenir pilosité", "source": new URL("/apptask-dist/assets/poils-Bo__OETL.png", import.meta.url) },
        { "name": "apply_sunscreen", "label": "Appliquer protection solaire", "source": new URL("/apptask-dist/assets/solaire-Bil7BMT3.png", import.meta.url) },
        { "name": "drink_green_tea", "label": "Se faire un thé vert", "source": new URL("/apptask-dist/assets/the-B_3heGwV.png", import.meta.url) },        
        { "name": "night_routine", "label": "Routine du soir (hygiène + détente)", "source": new URL("/apptask-dist/assets/soir-BttMM92a.png", import.meta.url) },
        
      ]
    },
     {
      "category": "Soin de la maison",
      "tasks": [
        { "name": "clean_surfaces", "label": "Nettoyer les surfaces", "source": new URL("../assets/produits-ménage.png", import.meta.url) },
        { "name": "dust", "label": "Passer le plumeau", "source": new URL("/apptask-dist/assets/plumeau-CZEuGZXf.png", import.meta.url) },
        { "name": "mop_floor", "label": "Passer la serpillère", "source": new URL("/apptask-dist/assets/serpillere-Cb3bfWA0.png", import.meta.url) },
        { "name": "sweep_floor", "label": "Passer le balai", "source": new URL("/apptask-dist/assets/balai-DZP9WQd1.png", import.meta.url) },
        { "name": "water_plants", "label": "Arroser les plantes", "source": new URL("/apptask-dist/assets/arroser-BxG-ICNl.png", import.meta.url) },
        { "name": "make_bed", "label": "Faire le lit", "source": new URL("/apptask-dist/assets/lit-DcMy09jO.png", import.meta.url) },
        { "name": "air_rooms", "label": "Aérer les pièces", "source": new URL("/apptask-dist/assets/aerer-DrELvJye.png", import.meta.url) },
        { "name": "clear_surfaces", "label": "Débarrasser", "source": new URL("/apptask-dist/assets/debarrasser-Bo_J_NGj.png", import.meta.url) },
        { "name": "tidy_toys", "label": "Ranger les jouets", "source": new URL("/apptask-dist/assets/ranger-jouets-0HVfAIBu.png", import.meta.url) },
        { "name": "tidy_sofa", "label": "Ranger le canapé", "source": new URL("/apptask-dist/assets/ranger-canape-EAqaPUKm.png", import.meta.url) },
        { "name": "organize_entry", "label": "Ranger l’entrée (chaussures, sacs, clés)", "source": new URL("/apptask-dist/assets/ranger-entree-BPTFRhdt.png", import.meta.url) },
        { "name": "quick_floor_clean", "label": "Ramasser au sol (jouets, déchets)", "source": new URL("/apptask-dist/assets/ramasser-sol-MGx28CPz.png", import.meta.url) },
        { "name": "wipe_table", "label": "Passer l'éponge", "source": new URL("/apptask-dist/assets/eponge-Dzz7GKf6.png", import.meta.url) },
        { "name": "empty_small_bins", "label": "Vider petites poubelles (salle de bain, bureau)", "source": new URL("/apptask-dist/assets/vider-poubelles-BMRa3gI-.png", import.meta.url) },
        { "name": "organize_work_area", "label": "Ranger espace de travail", "source": new URL("/apptask-dist/assets/ranger-bureau-zhShPelY.png", import.meta.url) },
        { "name": "take_out_trash_kitchen", "label": "Sortir la poubelle", "source": new URL("/apptask-dist/assets/sortir-poubelle-DjRmhGrb.png", import.meta.url) },
     
      ]
    },
     {
      "category": "linge",
      "tasks": [
        { "name": "change_clothes", "label": "Préparer des vêtements", "source": new URL("/apptask-dist/assets/preparer-linge-1EMpwrT8.png", import.meta.url) },
        { "name": "put_clothes_in_laundry", "label": "Mettre les vêtements au sale", "source": new URL("/apptask-dist/assets/linge-sale-BtUDHw3R.png", import.meta.url) },
        { "name": "iron_clothes", "label": "Repasser le linge", "source": new URL("/apptask-dist/assets/repasser-Bd3yn3Hm.png", import.meta.url) },
        { "name": "dress", "label": "S'habiller", "source": new URL("/apptask-dist/assets/habiller-T2eFCklI.png", import.meta.url) },
      ]
    },
    {
      "category": "cuisine",
      "tasks": [
        { "name": "eat_breakfast", "label": "Prendre le petit-déjeuner", "source": new URL("/apptask-dist/assets/ptitdej-B1L8G4tJ.png", import.meta.url) },        
        { "name": "eat_breakfast_vegan", "label": "Prendre le petit-déjeuner végétarien", "source": new URL("/apptask-dist/assets/ptitdej-vegan-D-UDuogE.png", import.meta.url) },        
        { "name": "eat_lunch", "label": "Prendre le déjeuner", "source": new URL("/apptask-dist/assets/dej-normal-BISSrb71.png", import.meta.url) },
        { "name": "eat_lunch_vegan", "label": "Prendre le déjeuner végétarien", "source": new URL("/apptask-dist/assets/dej-vegan-B7BtFhx3.png", import.meta.url) },
        { "name": "eat_snack", "label": "Prendre un encas sain", "source": new URL("/apptask-dist/assets/encas-DkbX4O5O.png", import.meta.url) },
        { "name": "eat_dinner", "label": "Prendre le dîner", "source": new URL("/apptask-dist/assets/dej-vegan-B7BtFhx3.png", import.meta.url) },
        { "name": "check_fridge", "label": "Vérifier le frigo / les stocks ", "source": new URL("../assets/frigo.png", import.meta.url) },
        { "name": "set_table", "label": "Dresser la table", "source": new URL("/apptask-dist/assets/dresser-table-CtaurPQv.png", import.meta.url) },
        { "name": "store_leftovers", "label": "Ranger les restes", "source": new URL("/apptask-dist/assets/ranger-restes-nZTXZqK_.png", import.meta.url) },
        { "name": "prepare_lunchbox", "label": "Préparer la lunchbox", "source": new URL("/apptask-dist/assets/lunchbox-w4SOvs9j.png", import.meta.url) },
        { "name": "clean_sink", "label": "Nettoyer l’évier", "source": new URL("/apptask-dist/assets/nettoyer-evier-CMBwjh23.png", import.meta.url) },
        { "name": "refill_water", "label": "Remplir gourdes / carafes", "source": new URL("/apptask-dist/assets/remplir-gourdes-Cx9VOHbQ.png", import.meta.url) },
        { "name": "prepare_snack", "label": "Préparer une collation", "source": new URL("/apptask-dist/assets/preparer-collation-6Er_TlWh.png", import.meta.url) },
        { "name": "prepare_breakfast", "label": "Préparer le petit-déjeuner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "prepare_lunch", "label": "Préparer le déjeuner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "prepare_dinner", "label": "Préparer le dîner", "source": new URL("/apptask-dist/assets/cuisiner-DpoZsFVZ.png", import.meta.url) },
        { "name": "do_dishes", "label": "Faire la vaisselle", "source": new URL("/apptask-dist/assets/faire-vaisselle-zdpqSiYc.png", import.meta.url) },
        { "name": "fill_dishwasher", "label": "Remplir le lave-vaisselle", "source": new URL("/apptask-dist/assets/remplir-lave-vaisselle-OXm4y6TQ.png", import.meta.url) },
        { "name": "put_away_dishes", "label": "Ranger la vaisselle", "source": new URL("/apptask-dist/assets/ranger-vaisselle-ICap_Cak.png", import.meta.url) },
        { "name": "empty_dishwasher", "label": "Vider le lave-vaisselle", "source": new URL("/apptask-dist/assets/vider-lave-vaisselle-bKVGIpx2.png", import.meta.url) },
        { "name": "defrost_food", "label": "Décongeler aliments", "source": new URL("/apptask-dist/assets/decongeler-aliments-CPHKVKxZ.png", import.meta.url) },

      ]
    },
    {
      "category": "enfants/bébés",
      "tasks": [
        { "name": "wake_children", "label": "Réveiller les enfants" },
        { "name": "prepare_children", "label": "Rappeler les tâches aux enfants" },
        { "name": "school_dropoff", "label": "Amener les enfants à l'école" },
        { "name": "homework_help", "label": "Aider aux devoirs" },
        { "name": "do_homework", "label": "Faire les devoirs" },
        { "name": "bath_children", "label": "Donner le bain aux enfants" },
        { "name": "bedtime_children", "label": "Coucher les enfants" },
        { "name": "check_children_state", "label": "Observer l’état des enfants (fatigue, humeur, santé)" },
        { "name": "ask_children_favorites", "label": "Demander aux enfants ce qu'ils ont aimé aujourd'hui" },
        { "name": "ask_children_dislikes", "label": "Demander aux enfants ce qu'ils n'ont pas aimé aujourd'hui" },
        { "name": "dress_children", "label": "Habiller les enfants" },
        { "name": "prepare_school_bag", "label": "Préparer sac / affaires école" },
        { "name": "school_pickup", "label": "Récupérer les enfants" },
        { "name": "give_snack", "label": "Donner goûter / collation" },
        { "name": "educational_activity", "label": "Proposer une activité éducative" },
        { "name": "play_time", "label": "Temps de jeu / interaction" },
        { "name": "manage_conflicts", "label": "Gérer conflits / émotions" },
        { "name": "screen_time_management", "label": "Gérer le temps d’écran" },
        { "name": "bedtime_routine", "label": "Routine du coucher (histoire, câlin, apaisement)" },
        { "name": "night_check", "label": "Vérification nocturne" }
      ]
    },

    {
      "category": "gestion",
      "tasks": [
        { "name": "check_calendar", "label": "Vérifier le planning de la journée" },
        { "name": "check_messages", "label": "Consulter messages / mails importants" },
        { "name": "manage_budget", "label": "Vérifier dépenses du jour" },
        { "name": "prioritize_tasks", "label": "Prioriser les tâches essentielles" },
        { "name": "respond_messages", "label": "Répondre aux messages urgents" },
        { "name": "handle_urgent_admin", "label": "Gérer une tâche administrative urgente" },
        { "name": "track_expenses", "label": "Noter les dépenses du jour" },
        { "name": "check_bank_account", "label": "Vérifier le compte bancaire" },
        { "name": "plan_next_day", "label": "Préparer le lendemain" }
      ]
    },
    {
      "category": "sante",
      "tasks": [
        { "name": "take_medication", "label": "Prendre vitamines/compléments alimentaires" },
        { "name": "rest", "label": "Prendre un moment de repos" },
        { "name": "move_body", "label": "Faire une activité physique légère" },
        { "name": "go_for_walk", "label": "Faire une balade" },
        { "name": "get_fresh_air", "label": "S'exposer à la lumière du jour" },
        { "name": "sleep_preparation", "label": "Préparer le sommeil (routine calme)" },
        { "name": "read_book", "label": "Lire un livre" },
        { "name": "body_signal_check", "label": "Écouter son corps (douleurs, fatigue)" },
        { "name": "emotional_check", "label": "Identifier son état émotionnel" },
        { "name": "take_me_time", "label": "Prendre un moment pour soi" }


 /* CATERGORY SANTÉ SUPPRIMÉE POUR LE MOMENT, À RÉINTÉGRER DANS L'applications suivi

        { "id": "drink_water", "label": "Boire suffisamment d'eau" },
        { "id": "rest", "label": "Prendre un moment de repos" },
         { "id": "drink_water_check", "label": "Boire de l’eau régulièrement" },
    { "id": "eat_balanced_meal", "label": "Manger un repas équilibré" },
    { "id": "take_medication", "label": "Prendre traitement / vitamines" },
    { "id": "move_body", "label": "Bouger (marche, activité physique légère)" },
    { "id": "stretch_body", "label": "S’étirer / mobilité douce" },
    { "id": "get_fresh_air", "label": "Prendre l’air / exposition à la lumière du jour" },
    { "id": "rest_break", "label": "Prendre une pause (physique ou mentale)" },
    { "id": "breathing_exercise", "label": "Faire un exercice de respiration" },
    { "id": "limit_screens", "label": "Limiter les écrans (moment choisi)" },
    { "id": "sleep_check", "label": "Vérifier qualité / durée du sommeil" },
    { "id": "emotional_check", "label": "Identifier son état émotionnel" },
*/
      ]
    },
    {
      "category": "exterieur",
      "tasks": [
        { "name": "transport", "label": "Prévoir les déplacements (voiture, bus, etc.)" },
        { "name": "prepare_to_leave", "label": "Se regarder dans le miroir avant de partir" },
        { "name": "check_weather", "label": "Vérifier la météo" },
        { "name": "take_keys", "label": "Prendre les clés" },
        { "name": "take_phones", "label": "Prendre les téléphones" },
        { "name": "take_wallet", "label": "Prendre le portefeuille" },
        { "name": "take_bags", "label": "Prendre les sacs" },
        { "name": "secure_home", "label": "Sécuriser la maison (fermer portes, fenêtres)" },
        { "name": "deposit_mail", "label": "Déposer le courrier/colis" },
        { "name": "take_mail", "label": "Prendre le courrier/colis" },
        { "name": "wait_time_use", "label": "Utiliser temps d’attente (lire, écouter un podcast, se reposer)" },
      ]
    }
  
];

const weeklyTaskList = [
        {
      "category": "linge",
      "tasks": [
        { "name": "laundry_check", "label": "Vérifier le linge sale", "source": new URL("/apptask-dist/assets/linge-sale-BtUDHw3R.png", import.meta.url) },
        { "name": "sort_laundry", "label": "Trier le linge (couleurs, matières)", "source": new URL("../assets/trier-linge.png", import.meta.url) },
        { "name": "check_pockets", "label": "Vérifier les poches", "source": new URL("../assets/verifier-poches.png", import.meta.url) },
        { "name": "change_towels", "label": "Changer les serviettes", "source": new URL("../assets/changer-serviettes.png", import.meta.url) },
        { "name": "start_laundry", "label": "Lancer une machine de vêtements", "source": new URL("../assets/lancer-machine.png", import.meta.url) },
        { "name": "start_white_laundry", "label": "Lancer une machine de vêtements blancs", "source": new URL("../assets/lancer-machine-blancs.png", import.meta.url) },
        { "name": "start_red_laundry", "label": "Lancer une machine de vêtements rouges", "source": new URL("../assets/lancer-machine-rouges.png", import.meta.url) },
        { "name": "start_baby_laundry", "label": "Lancer une machine de vêtements bébé", "source": new URL("../assets/lancer-machine-bebe.png", import.meta.url) },
        { "name": "start_home_laundry", "label": "Lancer une machine de linges de maison", "source": new URL("../assets/lancer-machine-linge-maison.png", import.meta.url) },
        { "name": "start_mop_laundry", "label": "Lancer une machine de serpillères et torchons", "source": new URL("../assets/lancer-machine-serpillere-torchons.png", import.meta.url) },
        { "name": "start_dark_laundry", "label": "Lancer une machine de vêtements foncés", "source": new URL("../assets/lancer-machine-fonces.png", import.meta.url) },
        { "name": "start_light_laundry", "label": "Lancer une machine de vêtements clairs", "source": new URL("../assets/lancer-machine-clairs.png", import.meta.url) },
        { "name": "change_bed_sheets", "label": "Changer les draps", "source": new URL("../assets/changer-draps.png", import.meta.url) },
        { "name": "hang_laundry", "label": "Étendre le linge", "source": new URL("../assets/etendre-linge.png", import.meta.url) },
        { "name": "fold_laundry", "label": "Plier le linge", "source": new URL("../assets/plier-linge.png", import.meta.url) },
        { "name": "store_laundry", "label": "Ranger le linge", "source": new URL("../assets/ranger-linge.png", import.meta.url) },
        { "name": "iron_clothes", "label": "Repasser le linge", "source": new URL("../assets/repasser-linge.png", import.meta.url) },
        { "name": "check_laundry_supplies", "label": "Vérifier lessive / produits", "source": new URL("../assets/verifier-produits.png", import.meta.url) }
      ]
    },
    {
      "category": "gestion",
      "tasks": [
        { "name": "check_calendar", "label": "Vérifier le planning de la semaine", "source": new URL("../assets/verifier-planning.png", import.meta.url) },
        { "name": "manage_budget", "label": "Vérifier dépenses de la semaine", "source": new URL("../assets/verifier-depenses.png", import.meta.url) },
        { "name": "check_bank_account", "label": "Vérifier le compte bancaire", "source": new URL("../assets/verifier-compte.png", import.meta.url) },
        { "name": "check_finances", "label": "Vérifier les finances", "source": new URL("../assets/verifier-finances.png", import.meta.url) },
        { "name": "pay_bills_if_needed", "label": "Payer factures", "source": new URL("../assets/payer-factures.png", import.meta.url) },
        { "name": "update_todo_task", "label": "Mettre à jour la task de tâches", "source": new URL("../assets/metre-a-jour-taches.png", import.meta.url) },
        { "name": "plan_weekend", "label": "Planifier le week-end", "source": new URL("../assets/planifier-weekend.png", import.meta.url) },
        { "name": "anticipate_pharmacy_purchases", "label": "Anticiper les achats en pharmacie", "source": new URL("../assets/anticiper-achats-pharmacie.png", import.meta.url) },
        { "name": "purchases", "label": "Faire les courses", "source": new URL("../assets/faire-courses.png", import.meta.url) },
        { "name": "store_purchases", "label": "Ranger les courses", "source": new URL("../assets/ranger-courses.png", import.meta.url) },
        { "name": "take_grocery_bags", "label": "Prendre les sacs de courses", "source": new URL("../assets/prendre-sacs-courses.png", import.meta.url) },
        { "name": "sort_papers", "label": "Trier papiers / courrier", "source": new URL("../assets/trier-papiers.png", import.meta.url) },
        { "name": "organize_activities", "label": "Organiser activités enfants", "source": new URL("../assets/organiser-activites-enfants.png", import.meta.url) },
        { "name": "clear_notifications", "label": "Nettoyer les messages/mails inutiles", "source": new URL("../assets/nettoyer-messages.png", import.meta.url) },
        { "name": "clear_photos", "label": "Nettoyer les photos inutiles", "source": new URL("../assets/nettoyer-photos.png", import.meta.url) },
        { "name": "organize_vacation", "label": "Organiser les prochaines vacances", "source": new URL("../assets/organiser-vacances.png", import.meta.url) },
        { "name": "organize_outings", "label": "Organiser les prochaines sorties", "source": new URL("../assets/organiser-sorties.png", import.meta.url) },
        { "name": "organize_family_meetings", "label": "Organiser les prochaines rencontres familiales", "source": new URL("../assets/organiser-rencontres-familiales.png", import.meta.url) },
      ]
    },
    {
    "category": "cuisine",
      "tasks": [
        { "name": "plan_meals", "label": "Planifier les repas de la semaine", "source": new URL("../assets/planifier-repas.png", import.meta.url) },
        { "name": "meal_prep", "label": "Préparer les repas à l'avance", "source": new URL("../assets/preparer-repas.png", import.meta.url) },
        { "name": "clean_fridge_quick", "label": "Nettoyage rapide du frigo", "source": new URL("../assets/nettoyer-frigo.png", import.meta.url) }
      ]
    },
    {
      "category": "nettoyage",
      "tasks": [
        { "name": "brush_floor", "label": "Passer le balai", "source": new URL("../assets/passer-balai.png", import.meta.url) },
        { "name": "clean_floor", "label": "Passer la serpillère", "source": new URL("../assets/passer-serpillere.png", import.meta.url) },
        { "name": "clean_kitchen", "label": "Nettoyer les équipements de la cuisine", "source": new URL("../assets/nettoyer-cuisine.png", import.meta.url) },
        { "name": "dust_furniture", "label": "Dépoussiérer", "source": new URL("../assets/depoussiere.png", import.meta.url) },
        { "name": "clean_windows", "label": "Nettoyer les fenêtres", "source": new URL("../assets/nettoyer-fenetres.png", import.meta.url) },
        { "name": "wipe_sink_bathroom", "label": "Nettoyer lavabo", "source": new URL("../assets/nettoyer-lavabo.png", import.meta.url) },
        { "name": "wipe_mirror", "label": "Nettoyer miroir", "source": new URL("../assets/nettoyer-miroir.png", import.meta.url) },
        { "name": "clean_shower", "label": "Nettoyer la douche", "source": new URL("../assets/nettoyer-douche.png", import.meta.url) },
        { "name": "clean_bathtub", "label": "Nettoyer la baignoire", "source": new URL("../assets/nettoyer-baignoire.png", import.meta.url) },
        { "name": "clean_sink_bathroom", "label": "Nettoyer lavabo", "source": new URL("../assets/nettoyer-lavabo.png", import.meta.url) },
        { "name": "clean_switches", "label": "Nettoyer les interrupteurs", "source": new URL("../assets/nettoyer-interrupteurs.png", import.meta.url) },
        { "name": "clean_doorknobs", "label": "Nettoyer les poignées de porte", "source": new URL("../assets/nettoyer-poignees.png", import.meta.url) },
        { "name": "clean_light_fixtures", "label": "Nettoyer les luminaires", "source": new URL("../assets/nettoyer-luminaires.png", import.meta.url) },
        { "name": "clean_exterior", "label": "Nettoyer les extérieurs", "source": new URL("../assets/nettoyer-exterieurs.png", import.meta.url) },
        { "name": "clean_toilets", "label": "Nettoyer les toilettes", "source": new URL("../assets/nettoyer-toilettes.png", import.meta.url) },
        { "name": "clean_walls", "label": "Nettoyer les murs", "source": new URL("../assets/nettoyer-murs.png", import.meta.url) },
        { "name": "clean_splashes", "label": "Nettoyer les éclaboussures", "source": new URL("../assets/nettoyer-eclaboussures.png", import.meta.url) },
        { "name": "clean_stove", "label": "Nettoyer la cuisinière", "source": new URL("../assets/nettoyer-cuisiniere.png", import.meta.url) },
        { "name": "clean_oven", "label": "Nettoyer le four", "source": new URL("../assets/nettoyer-four.png", import.meta.url) },
      ]
    },
    {
      "category": "sante_bien_etre",  
      "tasks": [
        { "name": "self_check_week", "label": "Faire un point sur son état (fatigue, stress)", "source": new URL("../assets/faire-point-etat.png", import.meta.url) },
        { "name": "plan_rest_time", "label": "Prévoir un moment de repos", "source": new URL("../assets/prevoir-repos.png", import.meta.url) },
      ]
    }
];

const API_URL = "https://app-simplifie-backend.onrender.com/api";
async function http(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}${path}`, {
    // Ajoute les autres options de la requête (méthode, corps, etc.) en écrasant les valeurs par défaut si nécessaire
    ...options,
    headers: {
      "Content-Type": "application/json",
      //boolean && objet retourne objet donc ici => Si un token est présent, l'ajoute à l'en-tête Authorization (les points: ...(null) => renvoit rien si token est null)
      ...token && { Authorization: `Bearer ${token}` },
      // Ajoute les en-têtes supplémentaires fournis dans les options, en écrasant les en-têtes par défaut si nécessaire
      ...options.headers || {}
    }
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }
  return res.json();
}

// GET /tasks
const getTasksList = () => {
  return http('/tasks') // utilise uniquement le paramètre path de la fonction http
};

// POST /tasks
const createTasksList = (data) => {
  return http('/tasks', { // utilise le paramètre path 
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'POST', 
    body: JSON.stringify(data)
  })
};

// PATCH /tasks/:id
const updateTaskList = (id, data) => {
  return http(`/tasks/${id}`, { // utilise le paramètre path pour spécifier l'ID de la task à mettre à jour
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'PATCH',
    body: JSON.stringify(data)
  })
};

// DELETE /tasks/:id
const deleteTasksList = (id) => {
  return http(`/tasks/${id}`, { // utilise le paramètre path pour spécifier l'ID de la task à supprimer
    //et options de la fonction http pour spécifier la méthode
    method: 'DELETE'
  })
};

const {defineStore} = await importShared('pinia');

const {ref: ref$8,computed: computed$5} = await importShared('vue');


const useTaskStore = defineStore('task', () => {
    const tasksLists = ref$8([]); // Stocke les task de l'utilisateur
    const selectedTasksList = ref$8(null); // Stocke la task actuellement sélectionnée pour affichage ou modification
    const creatingTasksList = ref$8(false); // Indique si l'utilisateur est en train de créer une nouvelle task
    const title = ref$8(''); // Stocke le titre de la task en cours de création ou de modification
    const type = ref$8('daily'); // Stocke le type de task (quotidienne, hebdo, etc.) en cours de création ou de modification 
    const showTasksListResults = ref$8(false); // Indique si les résultats de la task sélectionnée doivent être affichés (pour mobile)
    const showTasksListSelection = ref$8(false); // Indique si la sélection de la task doit être affichée (pour mobile)
    const showDeleteConfirmationTasksList = ref$8(false); // Indique si la confirmation de suppression d'une task doit être affichée
    const showDeleteConfirmationTask = ref$8(false); // Indique si la confirmation de suppression d'une tâche doit être affichée
    const toDeleteId = ref$8(null); // Stocke l'ID de la task à supprimer
    const toDeleteName = ref$8(''); // Stocke le nom de la task à supprimer
    const toDeleteImg = ref$8(''); // Stocke l'image de la task à supprimer

    const accordingToType = computed$5(() => {

    switch (selectedTasksList.value?.type) { // Computed pour déterminer la liste de tâches à afficher en fonction du type de task sélectionnée

        case 'daily':
        return dailyTaskList

        case 'weekly':
        return weeklyTaskList

        default:
        return []

    }

    });

//----------------------------- Les fonctions ---------------------------------------------------   
    
    //fonction pour intialiser les tasks
    const initializeTasksList = async () => {
        try {
            const res = await getTasksList(); // Appelle la fonction de l'API pour récupérer les tasks depuis la base de données
            tasksLists.value = res.data; // Stocke les tasks récupérées dans la variable reactive
        } catch (error) {
            console.error('Erreur lors de l\'initialisation des tasks:', error);
        }
    };
 
    // Fonction pour créer une nouvelle task
    const createTasksList$1 = async () => {
        if (!title.value.trim()) return // Ne pas créer de task si le titre est vide
        try {
            const newTask = { 
                title: title.value,
                type: type.value,
                items: [],
                typeView: 'multi'
                }; // Crée un objet task
            title.value = ''; // Réinitialiser le champ de titre
            type.value = 'daily'; // Réinitialiser le type de task
            creatingTasksList.value = false; // Sortir du mode création
            //j'envois à la bdd
            const res = await createTasksList(newTask); // Appelle la fonction de l'API pour créer une nouvelle task dans la base de données
            tasksLists.value.push(res.data); // Ajouter la nouvelle task à la liste des tasks
            console.log('Nouvelle task créée:', res.data); // Affiche la nouvelle task dans la console pour vérification
        } catch (error) {
            console.error('Erreur lors de la création de la task:', error);
        }
    };

    const selectTasksList = (taskId) => {
        selectedTasksList.value = tasksLists.value.find(t => t._id === taskId) || null; // Trouve la task par son ID et la stocke dans selectedTasksList
        showTasksListResults.value = true; // Affiche les résultats de la task sélectionnée (pour mobile)
        console.log('Task sélectionnée:', selectedTasksList.value); // Affiche la task sélectionnée dans la console pour vérification
    };   

    const editTasksListTitle = async (event, taskId, newTitle) => {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la task avant de la modifier
        const task = tasksLists.value.find(t => t._id === taskId); // Trouve la task à modifier par son ID
        if (task) {
            task.title = newTitle; // Met à jour le titre de la task
            try {
                await updateTaskList(taskId, { title: newTitle }); // Appelle la fonction de l'API pour mettre à jour le titre de la task dans la base de données
                console.log('Titre de la task mis à jour:', newTitle); // Affiche le nouveau titre dans la console pour vérification
            } catch (error) {
                console.error('Erreur lors de la mise à jour du titre de la task:', error);
            }
        }
    };  

    const updateTasksListTypeView = async (taskId, newTypeView) => {
        const task = tasksLists.value.find(t => t._id === taskId); // Trouve la task à modifier par son ID
        if (task) {
            task.typeView = newTypeView; // Met à jour le type d'affichage de la task
            try {
                const res = await updateTaskList(taskId, { typeView: newTypeView }); // Appelle la fonction de l'API pour mettre à jour le type d'affichage de la task dans la base de données
                console.log('Type d\'affichage de la task mis à jour:', res.data); // Affiche le nouveau type d'affichage dans la console pour vérification
            } catch (error) {
                console.error('Erreur lors de la mise à jour du type d\'affichage de la task:', error);
            }
        }
    };
    const updateTaskList$1 = async (taskId, updatedData) => {
        const task = tasksLists.value.find(t => t._id === taskId); // Trouve la task à modifier par son ID
        if (task) {
            Object.assign(task, updatedData); // Met à jour les propriétés de la task avec les données fournies
            try {
                const res = await updateTaskList(taskId, updatedData); // Appelle la fonction de l'API pour mettre à jour la task dans la base de données avec les nouvelles données
                console.log('Task mise à jour:', res.data); // Affiche la task mise à jour dans la console pour vérification
            } catch (error) {
                console.error('Erreur lors de la mise à jour de la task:', error);
            }
        }
    };

    const deleteTasksList$1 = async(TaskListId) => {
        tasksLists.value = tasksLists.value.filter(t => t._id !== TaskListId); // Supprime la task de la liste des tasks
        try {
            await deleteTasksList(TaskListId); // Appelle la fonction de l'API pour supprimer la task de la base de données
            console.log('Task supprimée avec succès, ID:', TaskListId); // Affiche un message de succès dans la console pour vérification
        
        } catch (error) {
            console.error('Erreur lors de la suppression de la task:', error);
        }
        showDeleteConfirmationTasksList.value = false; // Ferme la confirmation de suppression
        toDeleteId.value = null;
        toDeleteName.value = '';
        toDeleteImg.value = '';
        if (selectedTasksList.value && selectedTasksList.value._id === TaskListId) {
            selectedTasksList.value = null; // Si la task supprimée était sélectionnée, réinitialise la sélection
            showTasksListResults.value = false; // Masque les résultats de la task sélectionnée (pour mobile)
        }

    }; 
// fonctions pour les tâches à l'intérieur d'une taskList

    //ajouter une tâche à la taskList sélectionnée
    const addTask = async (newTask) => {
        if (selectedTasksList.value) {
            const taskToAdd = {
                ...newTask,
                done: false,  // Ajoute une propriété pour indiquer si la tâche est complétée ou non
                order: selectedTasksList.value.items.length // Ajoute une propriété pour indiquer l'ordre de la tâche
            };
            try {
            selectedTasksList.value.items.push(taskToAdd); // Ajoute la nouvelle tâche à la taskList sélectionnée
            const res = await updateTaskList(selectedTasksList.value._id, { items: selectedTasksList.value.items }); // Appelle la fonction de l'API pour mettre à jour la taskList dans la base de données avec la nouvelle tâche
            selectedTasksList.value.items = res.data.items; // Ajoute la nouvelle tâche à la taskList sélectionnée
        } catch (error) {
                console.error('Erreur lors de l\'ajout de la tâche à la taskList:', error);
            }
        }
    };
    //mettre à jour l'état des tâches
    const updateTaskStatus = async (taskId, done) => {
        if (selectedTasksList.value) {
            const task = selectedTasksList.value.items.find(t => t._id === taskId); // Trouve la tâche à mettre à jour par son ID
            if (task) {
                task.done = done; // Met à jour l'état de la tâche
                task.lastCompletedAt = done ? new Date() : null; // Met à jour la date de dernière complétion si la tâche est marquée comme faite, sinon réinitialise
                const res = await updateTaskList(selectedTasksList.value._id, { items: selectedTasksList.value.items }); // Appelle la fonction de l'API pour mettre à jour la taskList dans la base de données avec le nouvel état de la tâche
                selectedTasksList.value.items = res.data.items; // Met à jour la taskList sélectionnée avec les données retournées par l'API
            }
        }
    };

    //supprimer une tâche de la taskList sélectionnée
    const deleteTask = async (TaskId) => {
        if (selectedTasksList.value) {
            selectedTasksList.value.items = selectedTasksList.value.items.filter(t => t._id !== TaskId); // Supprime la tâche de la taskList sélectionnée
            await updateTaskList(selectedTasksList.value._id, { items: selectedTasksList.value.items }); // Appelle la fonction de l'API pour mettre à jour la taskList dans la base de données avec la tâche supprimée
            showDeleteConfirmationTask.value = false; // Ferme la confirmation de suppression
            toDeleteId.value = null;
            toDeleteName.value = '';
            toDeleteImg.value = '';
        }
    };
 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        tasksLists,
        selectedTasksList,
        creatingTasksList,
        title,
        type,
        showTasksListResults,
        showTasksListSelection,
        toDeleteId,
        toDeleteName,
        toDeleteImg,
        showDeleteConfirmationTasksList,
        showDeleteConfirmationTask,
        accordingToType,
        initializeTasksList,
        createTasksList: createTasksList$1,
        selectTasksList,
        editTasksListTitle,
        updateTasksListTypeView,
        updateTaskList: updateTaskList$1,
        deleteTasksList: deleteTasksList$1,
        addTask,
        updateTaskStatus,
        deleteTask
    }       
});

const {createElementVNode:_createElementVNode$8,unref:_unref$6,vModelText:_vModelText$1,withDirectives:_withDirectives$1,renderList:_renderList$3,Fragment:_Fragment$3,openBlock:_openBlock$8,createElementBlock:_createElementBlock$8,toDisplayString:_toDisplayString$6,normalizeClass:_normalizeClass$3,createCommentVNode:_createCommentVNode$7,withModifiers:_withModifiers$3} = await importShared('vue');


const _hoisted_1$7 = { class: "choose-task-title-form" };
const _hoisted_2$7 = { class: "input-group" };
const _hoisted_3$6 = {
  key: 0,
  class: "input-group"
};
const _hoisted_4$6 = { class: "type-select" };
const _hoisted_5$6 = ["onClick"];
const _hoisted_6$4 = { class: "type-name" };
const _hoisted_7$3 = { class: "selection-style" };
const _hoisted_8$3 = ["src"];
const _hoisted_9$3 = ["src", "alt"];
const _hoisted_10$2 = { class: "type-description" };
const _hoisted_11$1 = { class: "action-buttons" };

const {computed: computed$4,ref: ref$7} = await importShared('vue');


const _sfc_main$7 = {
  __name: 'chooseTaskTitle',
  setup(__props) {


const taskStore = useTaskStore(); // Utilisation du store pour les tasks avec Pinia
const selectedType = ref$7(typeTask[0].type); // Variable pour stocker le type de budget sélectionné, initialisée au premier type disponible
const selectColor = ref$7(typeTask[0].color); // Variable pour stocker la couleur du type de budget sélectionné

//Fermeture du formulaire de création de task
const closeForm = () => {
  taskStore.title = '';
  taskStore.type = 'quotidiennes';
  taskStore.creatingTasksList = false; // Ferme le formulaire de création de task
};


return (_ctx, _cache) => {
  return (_openBlock$8(), _createElementBlock$8("div", _hoisted_1$7, [
    _cache[6] || (_cache[6] = _createElementVNode$8("div", { class: "form-header" }, [
      _createElementVNode$8("h3", { class: "form-title" }, "Créer une nouvelle liste de tâches ✨")
    ], -1)),
    _cache[7] || (_cache[7] = _createElementVNode$8("p", { class: "form-subtitle" }, "Donnez un nom à votre liste de tâches pour mieux vous organiser ✨", -1)),
    _createElementVNode$8("form", {
      onSubmit: _cache[2] || (_cache[2] = _withModifiers$3($event => (_unref$6(taskStore).createTasksList()), ["prevent"]))
    }, [
      _createElementVNode$8("div", _hoisted_2$7, [
        _cache[3] || (_cache[3] = _createElementVNode$8("label", {
          class: "subtitle",
          for: "title"
        }, "Nom de la liste de tâches :", -1)),
        _withDirectives$1(_createElementVNode$8("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_unref$6(taskStore).title) = $event)),
          type: "text",
          placeholder: "Ma super liste de tâches"
        }, null, 512), [
          [_vModelText$1, _unref$6(taskStore).title]
        ])
      ]),
      (_unref$6(typeTask).length > 1)
        ? (_openBlock$8(), _createElementBlock$8("div", _hoisted_3$6, [
            _cache[4] || (_cache[4] = _createElementVNode$8("p", {
              class: "subtitle",
              for: "type"
            }, "Fréquence :", -1)),
            _createElementVNode$8("div", _hoisted_4$6, [
              (_openBlock$8(true), _createElementBlock$8(_Fragment$3, null, _renderList$3(_unref$6(typeTask), (item) => {
                return (_openBlock$8(), _createElementBlock$8("div", {
                  class: _normalizeClass$3(["type-option", { selected: selectedType.value === item.type }]),
                  key: item.type,
                  onClick: $event => (selectedType.value = item.type, selectColor.value = item.color, _unref$6(taskStore).type = item.type)
                }, [
                  _createElementVNode$8("p", _hoisted_6$4, _toDisplayString$6(item.label), 1),
                  _createElementVNode$8("div", _hoisted_7$3, [
                    _createElementVNode$8("img", {
                      class: _normalizeClass$3(item.type === selectedType.value ? 'checked-selection' : 'not-checked-selection'),
                      src: _unref$6(whitecheck),
                      alt: "icône de validation"
                    }, null, 10, _hoisted_8$3),
                    _createElementVNode$8("img", {
                      class: _normalizeClass$3(item.type === selectedType.value ? 'type-image-selected' : 'type-image'),
                      src: item.image,
                      alt: item.label
                    }, null, 10, _hoisted_9$3)
                  ])
                ], 10, _hoisted_5$6))
              }), 128))
            ]),
            _createElementVNode$8("p", _hoisted_10$2, _toDisplayString$6(_unref$6(typeTask).find(item => item.type === selectedType.value)?.description), 1)
          ]))
        : _createCommentVNode$7("", true),
      _createElementVNode$8("div", _hoisted_11$1, [
        _createElementVNode$8("button", {
          class: "secondary-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = $event => (closeForm()))
        }, " Annuler "),
        _cache[5] || (_cache[5] = _createElementVNode$8("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ]))
}
}

};
const ChooseTaskTitle = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-a5c74c1b"]]);

const {createElementVNode:_createElementVNode$7,toDisplayString:_toDisplayString$5,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7,createCommentVNode:_createCommentVNode$6,vModelText:_vModelText,unref:_unref$5,withKeys:_withKeys,withDirectives:_withDirectives} = await importShared('vue');


const _hoisted_1$6 = { class: "task-title-button" };
const _hoisted_2$6 = { class: "task-title-content" };
const _hoisted_3$5 = ["src"];
const _hoisted_4$5 = {
  key: 0,
  class: "button-text"
};
const _hoisted_5$5 = {
  key: 0,
  class: "action-icons"
};
const _hoisted_6$3 = ["src"];
const _hoisted_7$2 = ["src"];
const _hoisted_8$2 = {
  key: 1,
  class: "action-icons"
};
const _hoisted_9$2 = ["src"];
const _hoisted_10$1 = ["src"];

const {computed: computed$3,ref: ref$6,onMounted: onMounted$5} = await importShared('vue');


const _sfc_main$6 = {
  __name: 'TaskTitle',
  props: {
  title: {
    type: String,
    required: true,
      },
  taskId: {
    type: [String, Number],
    required: true
      },
  type: {
    type: String, // 
    required: true,
    validator: (value) => {
      return typeTask.some(item => item.type === value) // Vérifie que le type est valide en comparant avec les types définis dans typeTask
    }
  }
},
  setup(__props) {

const taskStore = useTaskStore();

//--------------------------Base du template-------------------------
const pencil = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e", import.meta.url).href;
const trash = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e", import.meta.url).href;
const check = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%234caf8d'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e", import.meta.url).href;
const cross = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23e35d6a'%20d='M183.1%20137.4C170.6%20124.9%20150.3%20124.9%20137.8%20137.4C125.3%20149.9%20125.3%20170.2%20137.8%20182.7L275.2%20320L137.9%20457.4C125.4%20469.9%20125.4%20490.2%20137.9%20502.7C150.4%20515.2%20170.7%20515.2%20183.2%20502.7L320.5%20365.3L457.9%20502.6C470.4%20515.1%20490.7%20515.1%20503.2%20502.6C515.7%20490.1%20515.7%20469.8%20503.2%20457.3L365.8%20320L503.1%20182.6C515.6%20170.1%20515.6%20149.8%20503.1%20137.3C490.6%20124.8%20470.3%20124.8%20457.8%20137.3L320.5%20274.7L183.1%20137.4z'/%3e%3c/svg%3e", import.meta.url).href;

const props = __props;

//---------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE Liste de tache-------------------------

computed$3(() => props.title); // Computed pour le titre de la budget
const newTitle = ref$6(props.title); // Variable réactive pour stocker le nouveau titre lors de l'édition

const icon = computed$3(() => { // Computed pour déterminer la couleur de fond en fonction du type de budget
  const typeInfo = typeTask.find(item => item.type === props.type); // Trouve les informations du type de budget dans le tableau typeTask
  return typeInfo ? typeInfo.icon : null // Retourne la couleur correspondante ou rouge si le type n'est pas trouvé
});

onMounted$5(() => {
});
const isEditing = ref$6(false); // Variable réactive pour contrôler le mode édition
const stopPropagation = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
};
// Emit pour les actions d'édition et de suppression

const updatemode = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
  isEditing.value = true; // Bascule le mode édition
};

const endUpdatemode = (event) => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la budget avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
  newTitle.value = props.title; // Réinitialise le titre à l'original en cas d'annulation
};
const closeEditMode = () => {
  isEditing.value = false; // Désactive le mode édition
};


return (_ctx, _cache) => {
  return (_openBlock$7(), _createElementBlock$7("button", _hoisted_1$6, [
    _createElementVNode$7("div", _hoisted_2$6, [
      _createElementVNode$7("img", {
        src: icon.value,
        alt: "taches journalières",
        class: "icon-type"
      }, null, 8, _hoisted_3$5),
      (!isEditing.value)
        ? (_openBlock$7(), _createElementBlock$7("p", _hoisted_4$5, _toDisplayString$5(newTitle.value), 1))
        : _withDirectives((_openBlock$7(), _createElementBlock$7("input", {
            key: 1,
            class: "input-edit",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((newTitle).value = $event)),
            onKeyup: _cache[1] || (_cache[1] = _withKeys($event => {_unref$5(taskStore).editTasksListTitle($event, __props.taskId, newTitle.value); closeEditMode();}, ["enter"])),
            onClick: _cache[2] || (_cache[2] = $event => (stopPropagation($event)))
          }, null, 544)), [
            [_vModelText, newTitle.value]
          ])
    ]),
    (!isEditing.value)
      ? (_openBlock$7(), _createElementBlock$7("div", _hoisted_5$5, [
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(pencil),
            alt: "modifier",
            onClick: updatemode
          }, null, 8, _hoisted_6$3),
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(trash),
            alt: "supprimer",
            onClick: _cache[3] || (_cache[3] = $event => {_unref$5(taskStore).showDeleteConfirmationTasksList = true; _unref$5(taskStore).toDeleteId = __props.taskId; _unref$5(taskStore).toDeleteName = newTitle.value;})
          }, null, 8, _hoisted_7$2)
        ]))
      : (_openBlock$7(), _createElementBlock$7("div", _hoisted_8$2, [
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(check),
            alt: "valider",
            onClick: _cache[4] || (_cache[4] = $event => {closeEditMode(); _unref$5(taskStore).editTasksListTitle($event, __props.taskId, newTitle.value);})
          }, null, 8, _hoisted_9$2),
          _createElementVNode$7("img", {
            class: "icon-edit",
            src: _unref$5(cross),
            alt: "annuler",
            onClick: endUpdatemode
          }, null, 8, _hoisted_10$1)
        ]))
  ]))
}
}

};
const TaskTitle = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-873cc00f"]]);

const {createElementVNode:_createElementVNode$6,createVNode:_createVNode$3,unref:_unref$4,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6,createCommentVNode:_createCommentVNode$5,createBlock:_createBlock$2,renderList:_renderList$2,Fragment:_Fragment$2,withModifiers:_withModifiers$2} = await importShared('vue');


const _hoisted_1$5 = { class: "task-sidebar" };
const _hoisted_2$5 = ["src"];
const {ref: ref$5,computed: computed$2,onMounted: onMounted$4,onUnmounted: onUnmounted$1} = await importShared('vue');

const _sfc_main$5 = {
  __name: 'Sidebar',
  setup(__props) {

const taskStore = useTaskStore(); // Utilisation du store pour accéder aux données et fonctions

// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------
const isDark = ref$5(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted$4(() => { // Exécuté quand le composant est monté
    // Observe le thème système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); 
    // Initialise isDark selon le thème actuel
    isDark.value = mediaQuery.matches; 
    // Fonction appelée quand le thème change
    const handler = (e) => { 
      isDark.value = e.matches; // Met à jour la valeur en fonction du nouveau thème
    };
    // Écoute les changements du thème système
    mediaQuery.addEventListener('change', handler); 

    taskStore.initializeTasksList();

  onUnmounted$1(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler); // Supprime l'écouteur pour éviter les fuites mémoire
  });

});

//--------------------------GESTION DE LA CRÉATION DE TASK-------------------------

ref$5(false); // Variable réactive pour contrôler l'affichage du formulaire 
taskStore.tasksLists; // Variable réactive pour stocker les titres des task existantes


return (_ctx, _cache) => {
  return (_openBlock$6(), _createElementBlock$6("nav", _hoisted_1$5, [
    _cache[2] || (_cache[2] = _createElementVNode$6("h2", null, " Mes Tâches ", -1)),
    _createVNode$3(StarBar),
    (_unref$4(taskStore).creatingTasksList === false)
      ? (_openBlock$6(), _createElementBlock$6("button", {
          key: 0,
          class: "add-task-button super-action-button",
          onClick: _cache[0] || (_cache[0] = $event => (_unref$4(taskStore).creatingTasksList = true))
        }, [
          _createElementVNode$6("img", {
            class: "icon-plus",
            src: isDark.value ? _unref$4(plusWhite) : _unref$4(plusBlack),
            alt: "ajouter une task"
          }, null, 8, _hoisted_2$5),
          _cache[1] || (_cache[1] = _createElementVNode$6("p", { class: "button-text" }, "Nouveau Suivi", -1))
        ]))
      : (_openBlock$6(), _createBlock$2(ChooseTaskTitle, { key: 1 })),
    (_openBlock$6(true), _createElementBlock$6(_Fragment$2, null, _renderList$2(_unref$4(taskStore).tasksLists, (item, index) => {
      return (_openBlock$6(), _createBlock$2(TaskTitle, {
        key: item._id,
        taskId: item._id,
        title: item.title,
        type: item.type,
        onClick: _withModifiers$2($event => (_unref$4(taskStore).selectTasksList(item._id)), ["self"])
      }, null, 8, ["taskId", "title", "type", "onClick"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-b7007d43"]]);

const arrowLeft = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(137,%20108,%20221)'%20d='M73.4%20297.4C60.9%20309.9%2060.9%20330.2%2073.4%20342.7L233.4%20502.7C245.9%20515.2%20266.2%20515.2%20278.7%20502.7C291.2%20490.2%20291.2%20469.9%20278.7%20457.4L173.3%20352L544%20352C561.7%20352%20576%20337.7%20576%20320C576%20302.3%20561.7%20288%20544%20288L173.3%20288L278.7%20182.6C291.2%20170.1%20291.2%20149.8%20278.7%20137.3C266.2%20124.8%20245.9%20124.8%20233.4%20137.3L73.4%20297.3z'/%3e%3c/svg%3e";

const multiSquareDark = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(0,%200,%200)'%20d='M480%20160L352%20160L352%20288L480%20288L480%20160zM544%20288L544%20480C544%20515.3%20515.3%20544%20480%20544L160%20544C124.7%20544%2096%20515.3%2096%20480L96%20160C96%20124.7%20124.7%2096%20160%2096L480%2096C515.3%2096%20544%20124.7%20544%20160L544%20288zM160%20352L160%20480L288%20480L288%20352L160%20352zM288%20288L288%20160L160%20160L160%20288L288%20288zM352%20352L352%20480L480%20480L480%20352L352%20352z'/%3e%3c/svg%3e";

const singleSquareDark = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(0,%200,%200)'%20d='M480%20144C488.8%20144%20496%20151.2%20496%20160L496%20480C496%20488.8%20488.8%20496%20480%20496L160%20496C151.2%20496%20144%20488.8%20144%20480L144%20160C144%20151.2%20151.2%20144%20160%20144L480%20144zM160%2096C124.7%2096%2096%20124.7%2096%20160L96%20480C96%20515.3%20124.7%20544%20160%20544L480%20544C515.3%20544%20544%20515.3%20544%20480L544%20160C544%20124.7%20515.3%2096%20480%2096L160%2096z'/%3e%3c/svg%3e";

const titleOnly = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(0,%200,%200)'%20d='M96%20160C96%20142.3%20110.3%20128%20128%20128L512%20128C529.7%20128%20544%20142.3%20544%20160C544%20177.7%20529.7%20192%20512%20192L128%20192C110.3%20192%2096%20177.7%2096%20160zM96%20320C96%20302.3%20110.3%20288%20128%20288L512%20288C529.7%20288%20544%20302.3%20544%20320C544%20337.7%20529.7%20352%20512%20352L128%20352C110.3%20352%2096%20337.7%2096%20320zM544%20480C544%20497.7%20529.7%20512%20512%20512L128%20512C110.3%20512%2096%20497.7%2096%20480C96%20462.3%20110.3%20448%20128%20448L512%20448C529.7%20448%20544%20462.3%20544%20480z'/%3e%3c/svg%3e";

const AngleDown = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M297.4%20438.6C309.9%20451.1%20330.2%20451.1%20342.7%20438.6L502.7%20278.6C515.2%20266.1%20515.2%20245.8%20502.7%20233.3C490.2%20220.8%20469.9%20220.8%20457.4%20233.3L320%20370.7L182.6%20233.4C170.1%20220.9%20149.8%20220.9%20137.3%20233.4C124.8%20245.9%20124.8%20266.2%20137.3%20278.7L297.3%20438.7z'/%3e%3c/svg%3e";

const xMark = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23e35d6a'%20d='M183.1%20137.4C170.6%20124.9%20150.3%20124.9%20137.8%20137.4C125.3%20149.9%20125.3%20170.2%20137.8%20182.7L275.2%20320L137.9%20457.4C125.4%20469.9%20125.4%20490.2%20137.9%20502.7C150.4%20515.2%20170.7%20515.2%20183.2%20502.7L320.5%20365.3L457.9%20502.6C470.4%20515.1%20490.7%20515.1%20503.2%20502.6C515.7%20490.1%20515.7%20469.8%20503.2%20457.3L365.8%20320L503.1%20182.6C515.6%20170.1%20515.6%20149.8%20503.1%20137.3C490.6%20124.8%20470.3%20124.8%20457.8%20137.3L320.5%20274.7L183.1%20137.4z'/%3e%3c/svg%3e";

const {openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode$4,toDisplayString:_toDisplayString$4,createElementVNode:_createElementVNode$5,unref:_unref$3,withModifiers:_withModifiers$1,normalizeClass:_normalizeClass$2} = await importShared('vue');


const _hoisted_1$4 = {
  key: 0,
  class: "selected-overlay",
  "\"": ""
};
const _hoisted_2$4 = { class: "header-box" };
const _hoisted_3$4 = { class: "task-name" };
const _hoisted_4$4 = ["src"];
const _hoisted_5$4 = ["src"];
const _hoisted_6$2 = ["src"];
const _hoisted_7$1 = ["src", "alt"];
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = ["src"];

const {ref: ref$4,onMounted: onMounted$3,computed: computed$1} = await importShared('vue');

const _sfc_main$4 = {
  __name: 'result',
  props: {
  item: {
    type: Object,
    required: true
  }
},
  setup(__props) {

const trash = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e", import.meta.url).href;
new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M320%20208C289.1%20208%20264%20182.9%20264%20152C264%20121.1%20289.1%2096%20320%2096C350.9%2096%20376%20121.1%20376%20152C376%20182.9%20350.9%20208%20320%20208zM320%20432C350.9%20432%20376%20457.1%20376%20488C376%20518.9%20350.9%20544%20320%20544C289.1%20544%20264%20518.9%20264%20488C264%20457.1%20289.1%20432%20320%20432zM376%20320C376%20350.9%20350.9%20376%20320%20376C289.1%20376%20264%20350.9%20264%20320C264%20289.1%20289.1%20264%20320%20264C350.9%20264%20376%20289.1%20376%20320z'/%3e%3c/svg%3e", import.meta.url).href;
const optionDark = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(0,%200,%200)'%20d='M320%20208C289.1%20208%20264%20182.9%20264%20152C264%20121.1%20289.1%2096%20320%2096C350.9%2096%20376%20121.1%20376%20152C376%20182.9%20350.9%20208%20320%20208zM320%20432C350.9%20432%20376%20457.1%20376%20488C376%20518.9%20350.9%20544%20320%20544C289.1%20544%20264%20518.9%20264%20488C264%20457.1%20289.1%20432%20320%20432zM376%20320C376%20350.9%20350.9%20376%20320%20376C289.1%20376%20264%20350.9%20264%20320C264%20289.1%20289.1%20264%20320%20264C350.9%20264%20376%20289.1%20376%20320z'/%3e%3c/svg%3e", import.meta.url).href;

const taskStore = useTaskStore();

const props = __props;

const taskElement = ref$4(null);
//je chercher dans chaque catégorie du tableau la tâche qui correspond au nom de la tâche sélectionnée pour afficher son label et son image
const task = computed$1(() =>

  taskStore.accordingToType

    .flatMap(category => category.tasks)

    .find(task => task.name === props.item.name)

);
const selected = ref$4(props.item.done); // Variable réactive pour suivre l'état de sélection de la tâche
const updateTaskStatus = () => {
if (showOptions.value) {
  showOptions.value = false; // Ferme les options si elles sont ouvertes
  }else {
  selected.value = !selected.value;
  taskStore.updateTaskStatus(props.item._id, selected.value);
  }
};

const showOptions = ref$4(false);

// je fais un switch pour afficher les différentes options d'affichage en fonction de la valeur de typeView dans le store
const displayOption = computed$1(() => {
    switch (taskStore.selectedTasksList.typeView) {
        case 'single':
            return 'choices-box-single-view'
        case 'titleOnly':
            return 'title-box'
        case 'multi':
            return 'choices-box'
    }
});

const displayImage = computed$1(() => {
    switch (taskStore.selectedTasksList.typeView) {
        case 'single':
            return 'task-image-single-view'
        case 'titleOnly':
            return 'task-image-hidden'
        case 'multi':
            return 'task-image'
    }
});
const displayOrder = computed$1(() => {
    switch (taskStore.selectedTasksList.typeView) {
        case 'single':
            return 'change-index-box'
        case 'titleOnly':
            return 'change-index-box-title-only'
        case 'multi':
            return 'change-index-box-multi'
    }
});

//je récupères l'ensemble des taches pour modifier leurs order dans la taskList
const allTasks = computed$1(() => {
    return taskStore.selectedTasksList ? taskStore.selectedTasksList.items : [];
});

// je crée une fonction pour changer l'ordre des tâches dans la taskList en fonction de l'index de la tâche sélectionnée et de la direction du changement d'ordre (up ou down)
const changeTaskOrder = (direction) => {
  console.log('1', allTasks.value);
    const taskIndex = allTasks.value.findIndex(t => t._id === props.item._id); // Trouve l'index de la tâche sélectionnée dans le tableau des tâches
    const newIndex = direction === 'up' ? taskIndex - 1 : taskIndex + 1;// Calcule le nouvel index en fonction de la direction du changement d'ordre
    if (newIndex < 0 || newIndex >= allTasks.value.length) return; // Vérifie que le nouvel index est dans les limites du tableau
    const newTasks = [...allTasks.value];// Crée une copie du tableau des tâches pour éviter de muter directement le state
  console.log('2', newTasks);
    const [movedTask] = newTasks.splice(taskIndex, 1);// Retire la tâche sélectionnée de sa position actuelle et la stocke dans une variable
    newTasks.splice(newIndex, 0, movedTask);// Insère la tâche à sa nouvelle position dans le tableau
    newTasks.forEach((task, index) => {
      task.order = index;// Met à jour la propriété order de chaque tâche en fonction de sa nouvelle position dans le tableau
    });
    taskStore.updateTaskList(taskStore.selectedTasksList._id, { items: newTasks }); // Met à jour la taskList dans le store avec le nouvel ordre des tâches
    if (direction === 'up' ) {
      taskElement.value.scrollIntoView({behavior: 'instant',block: 'end'});// Fait défiler la tâche sélectionnée dans la vue pour qu'elle soit visible après le changement d'ordre
    }else {
      taskElement.value.scrollIntoView({behavior: 'instant',block: 'start'});// Fait défiler la tâche sélectionnée dans la vue pour qu'elle soit visible après le changement d'ordre
    }
  };



return (_ctx, _cache) => {
  return (_openBlock$5(), _createElementBlock$5("div", {
    class: _normalizeClass$2(displayOption.value),
    onClick: _cache[5] || (_cache[5] = $event => {updateTaskStatus(); showOptions.value = false;}),
    ref_key: "taskElement",
    ref: taskElement
  }, [
    (selected.value)
      ? (_openBlock$5(), _createElementBlock$5("div", _hoisted_1$4))
      : _createCommentVNode$4("", true),
    _createElementVNode$5("div", _hoisted_2$4, [
      _createElementVNode$5("p", _hoisted_3$4, _toDisplayString$4(task.value.label), 1),
      (!showOptions.value)
        ? (_openBlock$5(), _createElementBlock$5("img", {
            key: 0,
            src: _unref$3(optionDark),
            alt: "Options",
            class: "icon",
            onClick: _cache[0] || (_cache[0] = _withModifiers$1($event => (showOptions.value = !showOptions.value), ["stop"]))
          }, null, 8, _hoisted_4$4))
        : _createCommentVNode$4("", true),
      _createElementVNode$5("div", null, [
        (showOptions.value)
          ? (_openBlock$5(), _createElementBlock$5("img", {
              key: 0,
              src: _unref$3(trash),
              alt: "Supprimer",
              class: "trash-icon",
              onClick: _cache[1] || (_cache[1] = _withModifiers$1($event => {_unref$3(taskStore).showDeleteConfirmationTask = true; _unref$3(taskStore).toDeleteId = props.item._id; _unref$3(taskStore).toDeleteName = task.value.label; _unref$3(taskStore).toDeleteImg = task.value.source; showOptions.value = !showOptions.value;}, ["stop"]))
            }, null, 8, _hoisted_5$4))
          : _createCommentVNode$4("", true),
        (showOptions.value)
          ? (_openBlock$5(), _createElementBlock$5("img", {
              key: 1,
              src: _unref$3(xMark),
              alt: "Retour",
              class: "arrow-left-icon",
              onClick: _cache[2] || (_cache[2] = _withModifiers$1($event => ( showOptions.value = false), ["stop"]))
            }, null, 8, _hoisted_6$2))
          : _createCommentVNode$4("", true)
      ])
    ]),
    _createElementVNode$5("img", {
      src: task.value.source,
      loading: "lazy",
      alt: task.value.label,
      class: _normalizeClass$2(displayImage.value)
    }, null, 10, _hoisted_7$1),
    (showOptions.value)
      ? (_openBlock$5(), _createElementBlock$5("div", {
          key: 1,
          class: _normalizeClass$2(displayOrder.value)
        }, [
          _createElementVNode$5("img", {
            src: _unref$3(AngleDown),
            alt: "faire glisser vers le haut pour changer l'ordre",
            class: "angle-up-icon",
            onClick: _cache[3] || (_cache[3] = _withModifiers$1($event => (changeTaskOrder('up')), ["stop"]))
          }, null, 8, _hoisted_8$1),
          _createElementVNode$5("img", {
            src: _unref$3(AngleDown),
            alt: "faire glisser vers le bas pour changer l'ordre",
            class: "angle-down-icon",
            onClick: _cache[4] || (_cache[4] = _withModifiers$1($event => (changeTaskOrder('down')), ["stop"]))
          }, null, 8, _hoisted_9$1)
        ], 2))
      : _createCommentVNode$4("", true)
  ], 2))
}
}

};
const Result = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-c1147225"]]);

const {openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,createCommentVNode:_createCommentVNode$3,createElementVNode:_createElementVNode$4,toDisplayString:_toDisplayString$3} = await importShared('vue');


const _hoisted_1$3 = {
  key: 0,
  class: "selected-overlay"
};
const _hoisted_2$3 = { class: "task-name-box" };
const _hoisted_3$3 = ["checked"];
const _hoisted_4$3 = { class: "task-name" };
const _hoisted_5$3 = ["src", "alt"];
const _hoisted_6$1 = {
  key: 1,
  class: "increment-box"
};

const {ref: ref$3,onMounted: onMounted$2} = await importShared('vue');


const _sfc_main$3 = {
  __name: 'choices',
  props: {
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  source: {
    type: URL,
    required: true
  }
},
  setup(__props) {

onMounted$2(() => {
  //je compare les tâches de la taskList sélectionnée avec le nom de la tâche pour afficher le nombre de fois que la tâche a été ajoutée
  howMany.value = taskStore.selectedTasksList?.items.filter(item => item.name === props.name).length || 0;
  if (howMany.value > 0) {
    selected.value = !selected.value;
  }
});

const taskStore = useTaskStore();

const props = __props;

const selected = ref$3(false);
const howMany = ref$3(0);
const select = () => {
  howMany.value++;
  selected.value = true;
  taskStore.addTask({ name: props.name});
};



return (_ctx, _cache) => {
  return (_openBlock$4(), _createElementBlock$4("div", {
    class: "choices-box",
    onClick: _cache[0] || (_cache[0] = $event => (select()))
  }, [
    (selected.value)
      ? (_openBlock$4(), _createElementBlock$4("div", _hoisted_1$3))
      : _createCommentVNode$3("", true),
    _createElementVNode$4("div", _hoisted_2$3, [
      _createElementVNode$4("input", {
        type: "checkbox",
        checked: selected.value
      }, null, 8, _hoisted_3$3),
      _createElementVNode$4("p", _hoisted_4$3, _toDisplayString$3(props.label), 1)
    ]),
    _createElementVNode$4("img", {
      src: props.source,
      loading: "lazy",
      alt: props.label,
      class: "task-image"
    }, null, 8, _hoisted_5$3),
    (selected.value)
      ? (_openBlock$4(), _createElementBlock$4("div", _hoisted_6$1, [
          _createElementVNode$4("div", null, _toDisplayString$3(howMany.value), 1)
        ]))
      : _createCommentVNode$3("", true)
  ]))
}
}

};
const Choices = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-f9461131"]]);

// composables/useDevice.js
const {ref: ref$2,onMounted: onMounted$1,onUnmounted} = await importShared('vue');


function useIsMobile() {
  const isMobile = ref$2(window.innerWidth <= 768);

  const update = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  // Ajouter un écouteur d'événement pour mettre à jour la valeur de isMobile lors du redimensionnement de la fenêtre
  onMounted$1(() => {
    window.addEventListener('resize', update);
  });
  // Nettoyer l'écouteur d'événement lorsque le composant est démonté
  onUnmounted(() => {
      window.removeEventListener('resize', update);
    });

  return { isMobile }
}
/* importer dans le composant :
 import { useIsMobile } from '../composables/useIsMobile.js'
  const { isMobile } = useIsMobile()
  */

const {unref:_unref$2,createElementVNode:_createElementVNode$3,toDisplayString:_toDisplayString$2,normalizeClass:_normalizeClass$1,renderList:_renderList$1,Fragment:_Fragment$1,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$2} = await importShared('vue');


const _hoisted_1$2 = { class: "back-arrow-box" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "category-name" };
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = {
  key: 0,
  class: "choices-container"
};

const {onMounted,ref: ref$1} = await importShared('vue');


const _sfc_main$2 = {
  __name: 'categoryTasks',
  props: {
  item: {
    type: Object,
    required: true
  }
},
  setup(__props) {

const taskStore = useTaskStore();
const isOpen = ref$1(false);


return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("div", null, [
    _createElementVNode$3("div", _hoisted_1$2, [
      _createElementVNode$3("img", {
        src: _unref$2(arrowLeft),
        alt: "Retour",
        class: "back-arrow",
        onClick: _cache[0] || (_cache[0] = $event => (_unref$2(taskStore).showTasksListSelection = false))
      }, null, 8, _hoisted_2$2)
    ]),
    _createElementVNode$3("div", {
      class: "category-box",
      onClick: _cache[1] || (_cache[1] = $event => (isOpen.value = !isOpen.value))
    }, [
      _createElementVNode$3("p", _hoisted_3$2, _toDisplayString$2(__props.item.category), 1),
      _createElementVNode$3("img", {
        src: _unref$2(AngleDown),
        alt: "Voir plus",
        class: _normalizeClass$1(["angle-down", { rotated: isOpen.value }])
      }, null, 10, _hoisted_4$2)
    ]),
    (isOpen.value)
      ? (_openBlock$3(), _createElementBlock$3("div", _hoisted_5$2, [
          (_openBlock$3(true), _createElementBlock$3(_Fragment$1, null, _renderList$1(__props.item.tasks, (task, index) => {
            return (_openBlock$3(), _createBlock$1(Choices, {
              key: index+task.name,
              name: task.name,
              label: task.label,
              source: task.source
            }, null, 8, ["name", "label", "source"]))
          }), 128))
        ]))
      : _createCommentVNode$2("", true)
  ]))
}
}

};
const CategoryTasks = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-21a4de2d"]]);

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch {}
			if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var vuedraggable_umd$1 = {exports: {}};

/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    {
      visible = elSideVal >= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      _ref5.sortable;
          var cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1}); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i]});
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1});
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el});
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

const sortable_esm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  MultiDrag: MultiDragPlugin,
  Sortable,
  Swap: SwapPlugin,
  default: Sortable
}, Symbol.toStringTag, { value: 'Module' }));

const require$$0 = /*@__PURE__*/getAugmentedNamespace(sortable_esm);

var vuedraggable_umd = vuedraggable_umd$1.exports;

var hasRequiredVuedraggable_umd;

function requireVuedraggable_umd () {
	if (hasRequiredVuedraggable_umd) return vuedraggable_umd$1.exports;
	hasRequiredVuedraggable_umd = 1;
	(function (module, exports) {
		(function webpackUniversalModuleDefinition(root, factory) {
			module.exports = factory(require$$0);
		})((typeof self !== 'undefined' ? self : vuedraggable_umd), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId]) {
		/******/ 			return installedModules[moduleId].exports;
		/******/ 		}
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			i: moduleId,
		/******/ 			l: false,
		/******/ 			exports: {}
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.l = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// define getter function for harmony exports
		/******/ 	__webpack_require__.d = function(exports, name, getter) {
		/******/ 		if(!__webpack_require__.o(exports, name)) {
		/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		/******/ 		}
		/******/ 	};
		/******/
		/******/ 	// define __esModule on exports
		/******/ 	__webpack_require__.r = function(exports) {
		/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		/******/ 		}
		/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
		/******/ 	};
		/******/
		/******/ 	// create a fake namespace object
		/******/ 	// mode & 1: value is a module id, require it
		/******/ 	// mode & 2: merge all properties of value into the ns
		/******/ 	// mode & 4: return value when already ns object
		/******/ 	// mode & 8|1: behave like require
		/******/ 	__webpack_require__.t = function(value, mode) {
		/******/ 		if(mode & 1) value = __webpack_require__(value);
		/******/ 		if(mode & 8) return value;
		/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		/******/ 		var ns = Object.create(null);
		/******/ 		__webpack_require__.r(ns);
		/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		/******/ 		return ns;
		/******/ 	};
		/******/
		/******/ 	// getDefaultExport function for compatibility with non-harmony modules
		/******/ 	__webpack_require__.n = function(module) {
		/******/ 		var getter = module && module.__esModule ?
		/******/ 			function getDefault() { return module['default']; } :
		/******/ 			function getModuleExports() { return module; };
		/******/ 		__webpack_require__.d(getter, 'a', getter);
		/******/ 		return getter;
		/******/ 	};
		/******/
		/******/ 	// Object.prototype.hasOwnProperty.call
		/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
		/******/ })
		/************************************************************************/
		/******/ ({

		/***/ "01f9":
		/***/ (function(module, exports, __webpack_require__) {

		var LIBRARY = __webpack_require__("2d00");
		var $export = __webpack_require__("5ca1");
		var redefine = __webpack_require__("2aba");
		var hide = __webpack_require__("32e9");
		var Iterators = __webpack_require__("84f2");
		var $iterCreate = __webpack_require__("41a0");
		var setToStringTag = __webpack_require__("7f20");
		var getPrototypeOf = __webpack_require__("38fd");
		var ITERATOR = __webpack_require__("2b4c")('iterator');
		var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
		var FF_ITERATOR = '@@iterator';
		var KEYS = 'keys';
		var VALUES = 'values';

		var returnThis = function () { return this; };

		module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function (kind) {
		    if (!BUGGY && kind in proto) return proto[kind];
		    switch (kind) {
		      case KEYS: return function keys() { return new Constructor(this, kind); };
		      case VALUES: return function values() { return new Constructor(this, kind); };
		    } return function entries() { return new Constructor(this, kind); };
		  };
		  var TAG = NAME + ' Iterator';
		  var DEF_VALUES = DEFAULT == VALUES;
		  var VALUES_BUG = false;
		  var proto = Base.prototype;
		  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
		  var $default = $native || getMethod(DEFAULT);
		  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
		  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
		  var methods, key, IteratorPrototype;
		  // Fix native
		  if ($anyNative) {
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
		    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if (DEF_VALUES && $native && $native.name !== VALUES) {
		    VALUES_BUG = true;
		    $default = function values() { return $native.call(this); };
		  }
		  // Define iterator
		  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG] = returnThis;
		  if (DEFAULT) {
		    methods = {
		      values: DEF_VALUES ? $default : getMethod(VALUES),
		      keys: IS_SET ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if (FORCED) for (key in methods) {
		      if (!(key in proto)) redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};


		/***/ }),

		/***/ "02f4":
		/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__("4588");
		var defined = __webpack_require__("be13");
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function (TO_STRING) {
		  return function (that, pos) {
		    var s = String(defined(that));
		    var i = toInteger(pos);
		    var l = s.length;
		    var a, b;
		    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};


		/***/ }),

		/***/ "0390":
		/***/ (function(module, exports, __webpack_require__) {

		var at = __webpack_require__("02f4")(true);

		 // `AdvanceStringIndex` abstract operation
		// https://tc39.github.io/ecma262/#sec-advancestringindex
		module.exports = function (S, index, unicode) {
		  return index + (unicode ? at(S, index).length : 1);
		};


		/***/ }),

		/***/ "0bfb":
		/***/ (function(module, exports, __webpack_require__) {

		// 21.2.5.3 get RegExp.prototype.flags
		var anObject = __webpack_require__("cb7c");
		module.exports = function () {
		  var that = anObject(this);
		  var result = '';
		  if (that.global) result += 'g';
		  if (that.ignoreCase) result += 'i';
		  if (that.multiline) result += 'm';
		  if (that.unicode) result += 'u';
		  if (that.sticky) result += 'y';
		  return result;
		};


		/***/ }),

		/***/ "0d58":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys = __webpack_require__("ce10");
		var enumBugKeys = __webpack_require__("e11e");

		module.exports = Object.keys || function keys(O) {
		  return $keys(O, enumBugKeys);
		};


		/***/ }),

		/***/ "1495":
		/***/ (function(module, exports, __webpack_require__) {

		var dP = __webpack_require__("86cc");
		var anObject = __webpack_require__("cb7c");
		var getKeys = __webpack_require__("0d58");

		module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
		  anObject(O);
		  var keys = getKeys(Properties);
		  var length = keys.length;
		  var i = 0;
		  var P;
		  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};


		/***/ }),

		/***/ "214f":
		/***/ (function(module, exports, __webpack_require__) {

		__webpack_require__("b0c5");
		var redefine = __webpack_require__("2aba");
		var hide = __webpack_require__("32e9");
		var fails = __webpack_require__("79e5");
		var defined = __webpack_require__("be13");
		var wks = __webpack_require__("2b4c");
		var regexpExec = __webpack_require__("520a");

		var SPECIES = wks('species');

		var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
		  // #replace needs built-in support for named groups.
		  // #match works fine because it just return the exec results, even if it has
		  // a "grops" property.
		  var re = /./;
		  re.exec = function () {
		    var result = [];
		    result.groups = { a: '7' };
		    return result;
		  };
		  return ''.replace(re, '$<a>') !== '7';
		});

		var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
		  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
		  var re = /(?:)/;
		  var originalExec = re.exec;
		  re.exec = function () { return originalExec.apply(this, arguments); };
		  var result = 'ab'.split(re);
		  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
		})();

		module.exports = function (KEY, length, exec) {
		  var SYMBOL = wks(KEY);

		  var DELEGATES_TO_SYMBOL = !fails(function () {
		    // String methods call symbol-named RegEp methods
		    var O = {};
		    O[SYMBOL] = function () { return 7; };
		    return ''[KEY](O) != 7;
		  });

		  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
		    // Symbol-named RegExp methods call .exec
		    var execCalled = false;
		    var re = /a/;
		    re.exec = function () { execCalled = true; return null; };
		    if (KEY === 'split') {
		      // RegExp[@@split] doesn't call the regex's exec method, but first creates
		      // a new one. We need to return the patched regex when creating the new one.
		      re.constructor = {};
		      re.constructor[SPECIES] = function () { return re; };
		    }
		    re[SYMBOL]('');
		    return !execCalled;
		  }) : undefined;

		  if (
		    !DELEGATES_TO_SYMBOL ||
		    !DELEGATES_TO_EXEC ||
		    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
		    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
		  ) {
		    var nativeRegExpMethod = /./[SYMBOL];
		    var fns = exec(
		      defined,
		      SYMBOL,
		      ''[KEY],
		      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
		        if (regexp.exec === regexpExec) {
		          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
		            // The native String method already delegates to @@method (this
		            // polyfilled function), leasing to infinite recursion.
		            // We avoid it by directly calling the native @@method method.
		            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
		          }
		          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
		        }
		        return { done: false };
		      }
		    );
		    var strfn = fns[0];
		    var rxfn = fns[1];

		    redefine(String.prototype, KEY, strfn);
		    hide(RegExp.prototype, SYMBOL, length == 2
		      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
		      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
		      ? function (string, arg) { return rxfn.call(string, this, arg); }
		      // 21.2.5.6 RegExp.prototype[@@match](string)
		      // 21.2.5.9 RegExp.prototype[@@search](string)
		      : function (string) { return rxfn.call(string, this); }
		    );
		  }
		};


		/***/ }),

		/***/ "230e":
		/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__("d3f4");
		var document = __webpack_require__("7726").document;
		// typeof document.createElement is 'object' in old IE
		var is = isObject(document) && isObject(document.createElement);
		module.exports = function (it) {
		  return is ? document.createElement(it) : {};
		};


		/***/ }),

		/***/ "23c6":
		/***/ (function(module, exports, __webpack_require__) {

		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__("2d95");
		var TAG = __webpack_require__("2b4c")('toStringTag');
		// ES3 wrong here
		var ARG = cof(function () { return arguments; }()) == 'Arguments';

		// fallback for IE11 Script Access Denied error
		var tryGet = function (it, key) {
		  try {
		    return it[key];
		  } catch (e) { /* empty */ }
		};

		module.exports = function (it) {
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};


		/***/ }),

		/***/ "2621":
		/***/ (function(module, exports) {

		exports.f = Object.getOwnPropertySymbols;


		/***/ }),

		/***/ "2aba":
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__("7726");
		var hide = __webpack_require__("32e9");
		var has = __webpack_require__("69a8");
		var SRC = __webpack_require__("ca5a")('src');
		var $toString = __webpack_require__("fa5b");
		var TO_STRING = 'toString';
		var TPL = ('' + $toString).split(TO_STRING);

		__webpack_require__("8378").inspectSource = function (it) {
		  return $toString.call(it);
		};

		(module.exports = function (O, key, val, safe) {
		  var isFunction = typeof val == 'function';
		  if (isFunction) has(val, 'name') || hide(val, 'name', key);
		  if (O[key] === val) return;
		  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
		  if (O === global) {
		    O[key] = val;
		  } else if (!safe) {
		    delete O[key];
		    hide(O, key, val);
		  } else if (O[key]) {
		    O[key] = val;
		  } else {
		    hide(O, key, val);
		  }
		// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
		})(Function.prototype, TO_STRING, function toString() {
		  return typeof this == 'function' && this[SRC] || $toString.call(this);
		});


		/***/ }),

		/***/ "2aeb":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject = __webpack_require__("cb7c");
		var dPs = __webpack_require__("1495");
		var enumBugKeys = __webpack_require__("e11e");
		var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
		var Empty = function () { /* empty */ };
		var PROTOTYPE = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function () {
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__("230e")('iframe');
		  var i = enumBugKeys.length;
		  var lt = '<';
		  var gt = '>';
		  var iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__("fab2").appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};

		module.exports = Object.create || function create(O, Properties) {
		  var result;
		  if (O !== null) {
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty();
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};


		/***/ }),

		/***/ "2b4c":
		/***/ (function(module, exports, __webpack_require__) {

		var store = __webpack_require__("5537")('wks');
		var uid = __webpack_require__("ca5a");
		var Symbol = __webpack_require__("7726").Symbol;
		var USE_SYMBOL = typeof Symbol == 'function';

		var $exports = module.exports = function (name) {
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;


		/***/ }),

		/***/ "2d00":
		/***/ (function(module, exports) {

		module.exports = false;


		/***/ }),

		/***/ "2d95":
		/***/ (function(module, exports) {

		var toString = {}.toString;

		module.exports = function (it) {
		  return toString.call(it).slice(8, -1);
		};


		/***/ }),

		/***/ "2fdb":
		/***/ (function(module, exports, __webpack_require__) {
		// 21.1.3.7 String.prototype.includes(searchString, position = 0)

		var $export = __webpack_require__("5ca1");
		var context = __webpack_require__("d2c8");
		var INCLUDES = 'includes';

		$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
		  includes: function includes(searchString /* , position = 0 */) {
		    return !!~context(this, searchString, INCLUDES)
		      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});


		/***/ }),

		/***/ "32e9":
		/***/ (function(module, exports, __webpack_require__) {

		var dP = __webpack_require__("86cc");
		var createDesc = __webpack_require__("4630");
		module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
		  return dP.f(object, key, createDesc(1, value));
		} : function (object, key, value) {
		  object[key] = value;
		  return object;
		};


		/***/ }),

		/***/ "38fd":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has = __webpack_require__("69a8");
		var toObject = __webpack_require__("4bf8");
		var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
		var ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function (O) {
		  O = toObject(O);
		  if (has(O, IE_PROTO)) return O[IE_PROTO];
		  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};


		/***/ }),

		/***/ "41a0":
		/***/ (function(module, exports, __webpack_require__) {

		var create = __webpack_require__("2aeb");
		var descriptor = __webpack_require__("4630");
		var setToStringTag = __webpack_require__("7f20");
		var IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

		module.exports = function (Constructor, NAME, next) {
		  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
		  setToStringTag(Constructor, NAME + ' Iterator');
		};


		/***/ }),

		/***/ "456d":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.14 Object.keys(O)
		var toObject = __webpack_require__("4bf8");
		var $keys = __webpack_require__("0d58");

		__webpack_require__("5eda")('keys', function () {
		  return function keys(it) {
		    return $keys(toObject(it));
		  };
		});


		/***/ }),

		/***/ "4588":
		/***/ (function(module, exports) {

		// 7.1.4 ToInteger
		var ceil = Math.ceil;
		var floor = Math.floor;
		module.exports = function (it) {
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};


		/***/ }),

		/***/ "4630":
		/***/ (function(module, exports) {

		module.exports = function (bitmap, value) {
		  return {
		    enumerable: !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable: !(bitmap & 4),
		    value: value
		  };
		};


		/***/ }),

		/***/ "4bf8":
		/***/ (function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__("be13");
		module.exports = function (it) {
		  return Object(defined(it));
		};


		/***/ }),

		/***/ "5147":
		/***/ (function(module, exports, __webpack_require__) {

		var MATCH = __webpack_require__("2b4c")('match');
		module.exports = function (KEY) {
		  var re = /./;
		  try {
		    '/./'[KEY](re);
		  } catch (e) {
		    try {
		      re[MATCH] = false;
		      return !'/./'[KEY](re);
		    } catch (f) { /* empty */ }
		  } return true;
		};


		/***/ }),

		/***/ "520a":
		/***/ (function(module, exports, __webpack_require__) {


		var regexpFlags = __webpack_require__("0bfb");

		var nativeExec = RegExp.prototype.exec;
		// This always refers to the native implementation, because the
		// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
		// which loads this file before patching the method.
		var nativeReplace = String.prototype.replace;

		var patchedExec = nativeExec;

		var LAST_INDEX = 'lastIndex';

		var UPDATES_LAST_INDEX_WRONG = (function () {
		  var re1 = /a/,
		      re2 = /b*/g;
		  nativeExec.call(re1, 'a');
		  nativeExec.call(re2, 'a');
		  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
		})();

		// nonparticipating capturing group, copied from es5-shim's String#split patch.
		var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

		var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

		if (PATCH) {
		  patchedExec = function exec(str) {
		    var re = this;
		    var lastIndex, reCopy, match, i;

		    if (NPCG_INCLUDED) {
		      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
		    }
		    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

		    match = nativeExec.call(re, str);

		    if (UPDATES_LAST_INDEX_WRONG && match) {
		      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
		    }
		    if (NPCG_INCLUDED && match && match.length > 1) {
		      // Fix browsers whose `exec` methods don't consistently return `undefined`
		      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
		      // eslint-disable-next-line no-loop-func
		      nativeReplace.call(match[0], reCopy, function () {
		        for (i = 1; i < arguments.length - 2; i++) {
		          if (arguments[i] === undefined) match[i] = undefined;
		        }
		      });
		    }

		    return match;
		  };
		}

		module.exports = patchedExec;


		/***/ }),

		/***/ "52a7":
		/***/ (function(module, exports) {

		exports.f = {}.propertyIsEnumerable;


		/***/ }),

		/***/ "5537":
		/***/ (function(module, exports, __webpack_require__) {

		var core = __webpack_require__("8378");
		var global = __webpack_require__("7726");
		var SHARED = '__core-js_shared__';
		var store = global[SHARED] || (global[SHARED] = {});

		(module.exports = function (key, value) {
		  return store[key] || (store[key] = value !== undefined ? value : {});
		})('versions', []).push({
		  version: core.version,
		  mode: __webpack_require__("2d00") ? 'pure' : 'global',
		  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
		});


		/***/ }),

		/***/ "5ca1":
		/***/ (function(module, exports, __webpack_require__) {

		var global = __webpack_require__("7726");
		var core = __webpack_require__("8378");
		var hide = __webpack_require__("32e9");
		var redefine = __webpack_require__("2aba");
		var ctx = __webpack_require__("9b43");
		var PROTOTYPE = 'prototype';

		var $export = function (type, name, source) {
		  var IS_FORCED = type & $export.F;
		  var IS_GLOBAL = type & $export.G;
		  var IS_STATIC = type & $export.S;
		  var IS_PROTO = type & $export.P;
		  var IS_BIND = type & $export.B;
		  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
		  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
		  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
		  var key, own, out, exp;
		  if (IS_GLOBAL) source = name;
		  for (key in source) {
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    // export native or passed
		    out = (own ? target : source)[key];
		    // bind timers to global for call from export context
		    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // extend global
		    if (target) redefine(target, key, out, type & $export.U);
		    // export
		    if (exports[key] != out) hide(exports, key, exp);
		    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
		  }
		};
		global.core = core;
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library`
		module.exports = $export;


		/***/ }),

		/***/ "5eda":
		/***/ (function(module, exports, __webpack_require__) {

		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__("5ca1");
		var core = __webpack_require__("8378");
		var fails = __webpack_require__("79e5");
		module.exports = function (KEY, exec) {
		  var fn = (core.Object || {})[KEY] || Object[KEY];
		  var exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
		};


		/***/ }),

		/***/ "5f1b":
		/***/ (function(module, exports, __webpack_require__) {


		var classof = __webpack_require__("23c6");
		var builtinExec = RegExp.prototype.exec;

		 // `RegExpExec` abstract operation
		// https://tc39.github.io/ecma262/#sec-regexpexec
		module.exports = function (R, S) {
		  var exec = R.exec;
		  if (typeof exec === 'function') {
		    var result = exec.call(R, S);
		    if (typeof result !== 'object') {
		      throw new TypeError('RegExp exec method returned something other than an Object or null');
		    }
		    return result;
		  }
		  if (classof(R) !== 'RegExp') {
		    throw new TypeError('RegExp#exec called on incompatible receiver');
		  }
		  return builtinExec.call(R, S);
		};


		/***/ }),

		/***/ "613b":
		/***/ (function(module, exports, __webpack_require__) {

		var shared = __webpack_require__("5537")('keys');
		var uid = __webpack_require__("ca5a");
		module.exports = function (key) {
		  return shared[key] || (shared[key] = uid(key));
		};


		/***/ }),

		/***/ "626a":
		/***/ (function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__("2d95");
		// eslint-disable-next-line no-prototype-builtins
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};


		/***/ }),

		/***/ "6762":
		/***/ (function(module, exports, __webpack_require__) {

		// https://github.com/tc39/Array.prototype.includes
		var $export = __webpack_require__("5ca1");
		var $includes = __webpack_require__("c366")(true);

		$export($export.P, 'Array', {
		  includes: function includes(el /* , fromIndex = 0 */) {
		    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
		  }
		});

		__webpack_require__("9c6c")('includes');


		/***/ }),

		/***/ "6821":
		/***/ (function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__("626a");
		var defined = __webpack_require__("be13");
		module.exports = function (it) {
		  return IObject(defined(it));
		};


		/***/ }),

		/***/ "69a8":
		/***/ (function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function (it, key) {
		  return hasOwnProperty.call(it, key);
		};


		/***/ }),

		/***/ "6a99":
		/***/ (function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__("d3f4");
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function (it, S) {
		  if (!isObject(it)) return it;
		  var fn, val;
		  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
		  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
		  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
		  throw TypeError("Can't convert object to primitive value");
		};


		/***/ }),

		/***/ "7333":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.2.1 Object.assign(target, source, ...)
		var getKeys = __webpack_require__("0d58");
		var gOPS = __webpack_require__("2621");
		var pIE = __webpack_require__("52a7");
		var toObject = __webpack_require__("4bf8");
		var IObject = __webpack_require__("626a");
		var $assign = Object.assign;

		// should work with symbols and should have deterministic property order (V8 bug)
		module.exports = !$assign || __webpack_require__("79e5")(function () {
		  var A = {};
		  var B = {};
		  // eslint-disable-next-line no-undef
		  var S = Symbol();
		  var K = 'abcdefghijklmnopqrst';
		  A[S] = 7;
		  K.split('').forEach(function (k) { B[k] = k; });
		  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
		}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
		  var T = toObject(target);
		  var aLen = arguments.length;
		  var index = 1;
		  var getSymbols = gOPS.f;
		  var isEnum = pIE.f;
		  while (aLen > index) {
		    var S = IObject(arguments[index++]);
		    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
		    var length = keys.length;
		    var j = 0;
		    var key;
		    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
		  } return T;
		} : $assign;


		/***/ }),

		/***/ "7726":
		/***/ (function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self
		  // eslint-disable-next-line no-new-func
		  : Function('return this')();
		if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


		/***/ }),

		/***/ "77f1":
		/***/ (function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__("4588");
		var max = Math.max;
		var min = Math.min;
		module.exports = function (index, length) {
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};


		/***/ }),

		/***/ "79e5":
		/***/ (function(module, exports) {

		module.exports = function (exec) {
		  try {
		    return !!exec();
		  } catch (e) {
		    return true;
		  }
		};


		/***/ }),

		/***/ "7f20":
		/***/ (function(module, exports, __webpack_require__) {

		var def = __webpack_require__("86cc").f;
		var has = __webpack_require__("69a8");
		var TAG = __webpack_require__("2b4c")('toStringTag');

		module.exports = function (it, tag, stat) {
		  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
		};


		/***/ }),

		/***/ "8378":
		/***/ (function(module, exports) {

		var core = module.exports = { version: '2.6.5' };
		if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


		/***/ }),

		/***/ "84f2":
		/***/ (function(module, exports) {

		module.exports = {};


		/***/ }),

		/***/ "86cc":
		/***/ (function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__("cb7c");
		var IE8_DOM_DEFINE = __webpack_require__("c69a");
		var toPrimitive = __webpack_require__("6a99");
		var dP = Object.defineProperty;

		exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if (IE8_DOM_DEFINE) try {
		    return dP(O, P, Attributes);
		  } catch (e) { /* empty */ }
		  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
		  if ('value' in Attributes) O[P] = Attributes.value;
		  return O;
		};


		/***/ }),

		/***/ "9b43":
		/***/ (function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__("d8e8");
		module.exports = function (fn, that, length) {
		  aFunction(fn);
		  if (that === undefined) return fn;
		  switch (length) {
		    case 1: return function (a) {
		      return fn.call(that, a);
		    };
		    case 2: return function (a, b) {
		      return fn.call(that, a, b);
		    };
		    case 3: return function (a, b, c) {
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function (/* ...args */) {
		    return fn.apply(that, arguments);
		  };
		};


		/***/ }),

		/***/ "9c6c":
		/***/ (function(module, exports, __webpack_require__) {

		// 22.1.3.31 Array.prototype[@@unscopables]
		var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
		var ArrayProto = Array.prototype;
		if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
		module.exports = function (key) {
		  ArrayProto[UNSCOPABLES][key] = true;
		};


		/***/ }),

		/***/ "9def":
		/***/ (function(module, exports, __webpack_require__) {

		// 7.1.15 ToLength
		var toInteger = __webpack_require__("4588");
		var min = Math.min;
		module.exports = function (it) {
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};


		/***/ }),

		/***/ "9e1e":
		/***/ (function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__("79e5")(function () {
		  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
		});


		/***/ }),

		/***/ "a352":
		/***/ (function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

		/***/ }),

		/***/ "a481":
		/***/ (function(module, exports, __webpack_require__) {


		var anObject = __webpack_require__("cb7c");
		var toObject = __webpack_require__("4bf8");
		var toLength = __webpack_require__("9def");
		var toInteger = __webpack_require__("4588");
		var advanceStringIndex = __webpack_require__("0390");
		var regExpExec = __webpack_require__("5f1b");
		var max = Math.max;
		var min = Math.min;
		var floor = Math.floor;
		var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
		var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

		var maybeToString = function (it) {
		  return it === undefined ? it : String(it);
		};

		// @@replace logic
		__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
		  return [
		    // `String.prototype.replace` method
		    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
		    function replace(searchValue, replaceValue) {
		      var O = defined(this);
		      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
		      return fn !== undefined
		        ? fn.call(searchValue, O, replaceValue)
		        : $replace.call(String(O), searchValue, replaceValue);
		    },
		    // `RegExp.prototype[@@replace]` method
		    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
		    function (regexp, replaceValue) {
		      var res = maybeCallNative($replace, regexp, this, replaceValue);
		      if (res.done) return res.value;

		      var rx = anObject(regexp);
		      var S = String(this);
		      var functionalReplace = typeof replaceValue === 'function';
		      if (!functionalReplace) replaceValue = String(replaceValue);
		      var global = rx.global;
		      if (global) {
		        var fullUnicode = rx.unicode;
		        rx.lastIndex = 0;
		      }
		      var results = [];
		      while (true) {
		        var result = regExpExec(rx, S);
		        if (result === null) break;
		        results.push(result);
		        if (!global) break;
		        var matchStr = String(result[0]);
		        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
		      }
		      var accumulatedResult = '';
		      var nextSourcePosition = 0;
		      for (var i = 0; i < results.length; i++) {
		        result = results[i];
		        var matched = String(result[0]);
		        var position = max(min(toInteger(result.index), S.length), 0);
		        var captures = [];
		        // NOTE: This is equivalent to
		        //   captures = result.slice(1).map(maybeToString)
		        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
		        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
		        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
		        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
		        var namedCaptures = result.groups;
		        if (functionalReplace) {
		          var replacerArgs = [matched].concat(captures, position, S);
		          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
		          var replacement = String(replaceValue.apply(undefined, replacerArgs));
		        } else {
		          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
		        }
		        if (position >= nextSourcePosition) {
		          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
		          nextSourcePosition = position + matched.length;
		        }
		      }
		      return accumulatedResult + S.slice(nextSourcePosition);
		    }
		  ];

		    // https://tc39.github.io/ecma262/#sec-getsubstitution
		  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
		    var tailPos = position + matched.length;
		    var m = captures.length;
		    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
		    if (namedCaptures !== undefined) {
		      namedCaptures = toObject(namedCaptures);
		      symbols = SUBSTITUTION_SYMBOLS;
		    }
		    return $replace.call(replacement, symbols, function (match, ch) {
		      var capture;
		      switch (ch.charAt(0)) {
		        case '$': return '$';
		        case '&': return matched;
		        case '`': return str.slice(0, position);
		        case "'": return str.slice(tailPos);
		        case '<':
		          capture = namedCaptures[ch.slice(1, -1)];
		          break;
		        default: // \d\d?
		          var n = +ch;
		          if (n === 0) return match;
		          if (n > m) {
		            var f = floor(n / 10);
		            if (f === 0) return match;
		            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
		            return match;
		          }
		          capture = captures[n - 1];
		      }
		      return capture === undefined ? '' : capture;
		    });
		  }
		});


		/***/ }),

		/***/ "aae3":
		/***/ (function(module, exports, __webpack_require__) {

		// 7.2.8 IsRegExp(argument)
		var isObject = __webpack_require__("d3f4");
		var cof = __webpack_require__("2d95");
		var MATCH = __webpack_require__("2b4c")('match');
		module.exports = function (it) {
		  var isRegExp;
		  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
		};


		/***/ }),

		/***/ "ac6a":
		/***/ (function(module, exports, __webpack_require__) {

		var $iterators = __webpack_require__("cadf");
		var getKeys = __webpack_require__("0d58");
		var redefine = __webpack_require__("2aba");
		var global = __webpack_require__("7726");
		var hide = __webpack_require__("32e9");
		var Iterators = __webpack_require__("84f2");
		var wks = __webpack_require__("2b4c");
		var ITERATOR = wks('iterator');
		var TO_STRING_TAG = wks('toStringTag');
		var ArrayValues = Iterators.Array;

		var DOMIterables = {
		  CSSRuleList: true, // TODO: Not spec compliant, should be false.
		  CSSStyleDeclaration: false,
		  CSSValueList: false,
		  ClientRectList: false,
		  DOMRectList: false,
		  DOMStringList: false,
		  DOMTokenList: true,
		  DataTransferItemList: false,
		  FileList: false,
		  HTMLAllCollection: false,
		  HTMLCollection: false,
		  HTMLFormElement: false,
		  HTMLSelectElement: false,
		  MediaList: true, // TODO: Not spec compliant, should be false.
		  MimeTypeArray: false,
		  NamedNodeMap: false,
		  NodeList: true,
		  PaintRequestList: false,
		  Plugin: false,
		  PluginArray: false,
		  SVGLengthList: false,
		  SVGNumberList: false,
		  SVGPathSegList: false,
		  SVGPointList: false,
		  SVGStringList: false,
		  SVGTransformList: false,
		  SourceBufferList: false,
		  StyleSheetList: true, // TODO: Not spec compliant, should be false.
		  TextTrackCueList: false,
		  TextTrackList: false,
		  TouchList: false
		};

		for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
		  var NAME = collections[i];
		  var explicit = DOMIterables[NAME];
		  var Collection = global[NAME];
		  var proto = Collection && Collection.prototype;
		  var key;
		  if (proto) {
		    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
		    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
		    Iterators[NAME] = ArrayValues;
		    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
		  }
		}


		/***/ }),

		/***/ "b0c5":
		/***/ (function(module, exports, __webpack_require__) {

		var regexpExec = __webpack_require__("520a");
		__webpack_require__("5ca1")({
		  target: 'RegExp',
		  proto: true,
		  forced: regexpExec !== /./.exec
		}, {
		  exec: regexpExec
		});


		/***/ }),

		/***/ "be13":
		/***/ (function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function (it) {
		  if (it == undefined) throw TypeError("Can't call method on  " + it);
		  return it;
		};


		/***/ }),

		/***/ "c366":
		/***/ (function(module, exports, __webpack_require__) {

		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__("6821");
		var toLength = __webpack_require__("9def");
		var toAbsoluteIndex = __webpack_require__("77f1");
		module.exports = function (IS_INCLUDES) {
		  return function ($this, el, fromIndex) {
		    var O = toIObject($this);
		    var length = toLength(O.length);
		    var index = toAbsoluteIndex(fromIndex, length);
		    var value;
		    // Array#includes uses SameValueZero equality algorithm
		    // eslint-disable-next-line no-self-compare
		    if (IS_INCLUDES && el != el) while (length > index) {
		      value = O[index++];
		      // eslint-disable-next-line no-self-compare
		      if (value != value) return true;
		    // Array#indexOf ignores holes, Array#includes - not
		    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
		      if (O[index] === el) return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};


		/***/ }),

		/***/ "c649":
		/***/ (function(module, __webpack_exports__, __webpack_require__) {
		/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
		/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
		/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
		/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
		/* harmony import */ __webpack_require__("a481");


		function getConsole() {
		  if (typeof window !== "undefined") {
		    return window.console;
		  }

		  return global.console;
		}

		var console = getConsole();

		function cached(fn) {
		  var cache = Object.create(null);
		  return function cachedFn(str) {
		    var hit = cache[str];
		    return hit || (cache[str] = fn(str));
		  };
		}

		var regex = /-(\w)/g;
		var camelize = cached(function (str) {
		  return str.replace(regex, function (_, c) {
		    return c ? c.toUpperCase() : "";
		  });
		});

		function removeNode(node) {
		  if (node.parentElement !== null) {
		    node.parentElement.removeChild(node);
		  }
		}

		function insertNodeAt(fatherNode, node, position) {
		  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
		  fatherNode.insertBefore(node, refNode);
		}


		/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

		/***/ }),

		/***/ "c69a":
		/***/ (function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
		  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
		});


		/***/ }),

		/***/ "c8ba":
		/***/ (function(module, exports) {

		var g;

		// This works in non-strict mode
		g = (function() {
			return this;
		})();

		try {
			// This works if eval is allowed (see CSP)
			g = g || new Function("return this")();
		} catch (e) {
			// This works if the window reference is available
			if (typeof window === "object") g = window;
		}

		// g can still be undefined, but nothing to do about it...
		// We return undefined, instead of nothing here, so it's
		// easier to handle this case. if(!global) { ...}

		module.exports = g;


		/***/ }),

		/***/ "ca5a":
		/***/ (function(module, exports) {

		var id = 0;
		var px = Math.random();
		module.exports = function (key) {
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};


		/***/ }),

		/***/ "cadf":
		/***/ (function(module, exports, __webpack_require__) {

		var addToUnscopables = __webpack_require__("9c6c");
		var step = __webpack_require__("d53b");
		var Iterators = __webpack_require__("84f2");
		var toIObject = __webpack_require__("6821");

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function () {
		  var O = this._t;
		  var kind = this._k;
		  var index = this._i++;
		  if (!O || index >= O.length) {
		    this._t = undefined;
		    return step(1);
		  }
		  if (kind == 'keys') return step(0, index);
		  if (kind == 'values') return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');


		/***/ }),

		/***/ "cb7c":
		/***/ (function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__("d3f4");
		module.exports = function (it) {
		  if (!isObject(it)) throw TypeError(it + ' is not an object!');
		  return it;
		};


		/***/ }),

		/***/ "ce10":
		/***/ (function(module, exports, __webpack_require__) {

		var has = __webpack_require__("69a8");
		var toIObject = __webpack_require__("6821");
		var arrayIndexOf = __webpack_require__("c366")(false);
		var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

		module.exports = function (object, names) {
		  var O = toIObject(object);
		  var i = 0;
		  var result = [];
		  var key;
		  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while (names.length > i) if (has(O, key = names[i++])) {
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};


		/***/ }),

		/***/ "d2c8":
		/***/ (function(module, exports, __webpack_require__) {

		// helper for String#{startsWith, endsWith, includes}
		var isRegExp = __webpack_require__("aae3");
		var defined = __webpack_require__("be13");

		module.exports = function (that, searchString, NAME) {
		  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
		  return String(defined(that));
		};


		/***/ }),

		/***/ "d3f4":
		/***/ (function(module, exports) {

		module.exports = function (it) {
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};


		/***/ }),

		/***/ "d53b":
		/***/ (function(module, exports) {

		module.exports = function (done, value) {
		  return { value: value, done: !!done };
		};


		/***/ }),

		/***/ "d8e8":
		/***/ (function(module, exports) {

		module.exports = function (it) {
		  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
		  return it;
		};


		/***/ }),

		/***/ "e11e":
		/***/ (function(module, exports) {

		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');


		/***/ }),

		/***/ "f559":
		/***/ (function(module, exports, __webpack_require__) {
		// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

		var $export = __webpack_require__("5ca1");
		var toLength = __webpack_require__("9def");
		var context = __webpack_require__("d2c8");
		var STARTS_WITH = 'startsWith';
		var $startsWith = ''[STARTS_WITH];

		$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
		  startsWith: function startsWith(searchString /* , position = 0 */) {
		    var that = context(this, searchString, STARTS_WITH);
		    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
		    var search = String(searchString);
		    return $startsWith
		      ? $startsWith.call(that, search, index)
		      : that.slice(index, index + search.length) === search;
		  }
		});


		/***/ }),

		/***/ "f6fd":
		/***/ (function(module, exports) {

		// document.currentScript polyfill by Adam Miller

		// MIT license

		(function(document){
		  var currentScript = "currentScript",
		      scripts = document.getElementsByTagName('script'); // Live NodeList collection

		  // If browser needs currentScript polyfill, add get currentScript() to the document object
		  if (!(currentScript in document)) {
		    Object.defineProperty(document, currentScript, {
		      get: function(){

		        // IE 6-10 supports script readyState
		        // IE 10+ support stack trace
		        try { throw new Error(); }
		        catch (err) {

		          // Find the second match for the "at" string to get file src url from stack.
		          // Specifically works with the format of stack traces in IE.
		          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

		          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
		          for(i in scripts){
		            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
		              return scripts[i];
		            }
		          }

		          // If no match, return null
		          return null;
		        }
		      }
		    });
		  }
		})(document);


		/***/ }),

		/***/ "f751":
		/***/ (function(module, exports, __webpack_require__) {

		// 19.1.3.1 Object.assign(target, source)
		var $export = __webpack_require__("5ca1");

		$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


		/***/ }),

		/***/ "fa5b":
		/***/ (function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


		/***/ }),

		/***/ "fab2":
		/***/ (function(module, exports, __webpack_require__) {

		var document = __webpack_require__("7726").document;
		module.exports = document && document.documentElement;


		/***/ }),

		/***/ "fb15":
		/***/ (function(module, __webpack_exports__, __webpack_require__) {
		// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

		// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
		// This file is imported into lib/wc client bundles.

		if (typeof window !== 'undefined') {
		  {
		    __webpack_require__("f6fd");
		  }

		  var setPublicPath_i;
		  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
		    __webpack_require__.p = setPublicPath_i[1]; // eslint-disable-line
		  }
		}

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
		__webpack_require__("f751");

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
		__webpack_require__("f559");

		// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
		__webpack_require__("ac6a");

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
		__webpack_require__("cadf");

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
		__webpack_require__("456d");

		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
		function _arrayWithHoles(arr) {
		  if (Array.isArray(arr)) return arr;
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
		function _iterableToArrayLimit(arr, i) {
		  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
		  var _arr = [];
		  var _n = true;
		  var _d = false;
		  var _e = undefined;

		  try {
		    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
		      _arr.push(_s.value);

		      if (i && _arr.length === i) break;
		    }
		  } catch (err) {
		    _d = true;
		    _e = err;
		  } finally {
		    try {
		      if (!_n && _i["return"] != null) _i["return"]();
		    } finally {
		      if (_d) throw _e;
		    }
		  }

		  return _arr;
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
		function _arrayLikeToArray(arr, len) {
		  if (len == null || len > arr.length) len = arr.length;

		  for (var i = 0, arr2 = new Array(len); i < len; i++) {
		    arr2[i] = arr[i];
		  }

		  return arr2;
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

		function _unsupportedIterableToArray(o, minLen) {
		  if (!o) return;
		  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		  var n = Object.prototype.toString.call(o).slice(8, -1);
		  if (n === "Object" && o.constructor) n = o.constructor.name;
		  if (n === "Map" || n === "Set") return Array.from(o);
		  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
		function _nonIterableRest() {
		  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




		function _slicedToArray(arr, i) {
		  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
		}
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
		__webpack_require__("6762");

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
		__webpack_require__("2fdb");

		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

		function _arrayWithoutHoles(arr) {
		  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
		function _iterableToArray(iter) {
		  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
		function _nonIterableSpread() {
		  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}
		// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




		function _toConsumableArray(arr) {
		  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
		}
		// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
		var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
		var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

		// EXTERNAL MODULE: ./src/util/helper.js
		var helper = __webpack_require__("c649");

		// CONCATENATED MODULE: ./src/vuedraggable.js












		function buildAttribute(object, propName, value) {
		  if (value === undefined) {
		    return object;
		  }

		  object = object || {};
		  object[propName] = value;
		  return object;
		}

		function computeVmIndex(vnodes, element) {
		  return vnodes.map(function (elt) {
		    return elt.elm;
		  }).indexOf(element);
		}

		function _computeIndexes(slots, children, isTransition, footerOffset) {
		  if (!slots) {
		    return [];
		  }

		  var elmFromNodes = slots.map(function (elt) {
		    return elt.elm;
		  });
		  var footerIndex = children.length - footerOffset;

		  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
		    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
		  });

		  return isTransition ? rawIndexes.filter(function (ind) {
		    return ind !== -1;
		  }) : rawIndexes;
		}

		function emit(evtName, evtData) {
		  var _this = this;

		  this.$nextTick(function () {
		    return _this.$emit(evtName.toLowerCase(), evtData);
		  });
		}

		function delegateAndEmit(evtName) {
		  var _this2 = this;

		  return function (evtData) {
		    if (_this2.realList !== null) {
		      _this2["onDrag" + evtName](evtData);
		    }

		    emit.call(_this2, evtName, evtData);
		  };
		}

		function isTransitionName(name) {
		  return ["transition-group", "TransitionGroup"].includes(name);
		}

		function vuedraggable_isTransition(slots) {
		  if (!slots || slots.length !== 1) {
		    return false;
		  }

		  var _slots = _slicedToArray(slots, 1),
		      componentOptions = _slots[0].componentOptions;

		  if (!componentOptions) {
		    return false;
		  }

		  return isTransitionName(componentOptions.tag);
		}

		function getSlot(slot, scopedSlot, key) {
		  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
		}

		function computeChildrenAndOffsets(children, slot, scopedSlot) {
		  var headerOffset = 0;
		  var footerOffset = 0;
		  var header = getSlot(slot, scopedSlot, "header");

		  if (header) {
		    headerOffset = header.length;
		    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
		  }

		  var footer = getSlot(slot, scopedSlot, "footer");

		  if (footer) {
		    footerOffset = footer.length;
		    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
		  }

		  return {
		    children: children,
		    headerOffset: headerOffset,
		    footerOffset: footerOffset
		  };
		}

		function getComponentAttributes($attrs, componentData) {
		  var attributes = null;

		  var update = function update(name, value) {
		    attributes = buildAttribute(attributes, name, value);
		  };

		  var attrs = Object.keys($attrs).filter(function (key) {
		    return key === "id" || key.startsWith("data-");
		  }).reduce(function (res, key) {
		    res[key] = $attrs[key];
		    return res;
		  }, {});
		  update("attrs", attrs);

		  if (!componentData) {
		    return attributes;
		  }

		  var on = componentData.on,
		      props = componentData.props,
		      componentDataAttrs = componentData.attrs;
		  update("on", on);
		  update("props", props);
		  Object.assign(attributes.attrs, componentDataAttrs);
		  return attributes;
		}

		var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
		var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
		var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
		  return "on" + evt;
		});
		var draggingElement = null;
		var props = {
		  options: Object,
		  list: {
		    type: Array,
		    required: false,
		    default: null
		  },
		  value: {
		    type: Array,
		    required: false,
		    default: null
		  },
		  noTransitionOnDrag: {
		    type: Boolean,
		    default: false
		  },
		  clone: {
		    type: Function,
		    default: function _default(original) {
		      return original;
		    }
		  },
		  element: {
		    type: String,
		    default: "div"
		  },
		  tag: {
		    type: String,
		    default: null
		  },
		  move: {
		    type: Function,
		    default: null
		  },
		  componentData: {
		    type: Object,
		    required: false,
		    default: null
		  }
		};
		var draggableComponent = {
		  name: "draggable",
		  inheritAttrs: false,
		  props: props,
		  data: function data() {
		    return {
		      transitionMode: false,
		      noneFunctionalComponentMode: false
		    };
		  },
		  render: function render(h) {
		    var slots = this.$slots.default;
		    this.transitionMode = vuedraggable_isTransition(slots);

		    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
		        children = _computeChildrenAndOf.children,
		        headerOffset = _computeChildrenAndOf.headerOffset,
		        footerOffset = _computeChildrenAndOf.footerOffset;

		    this.headerOffset = headerOffset;
		    this.footerOffset = footerOffset;
		    var attributes = getComponentAttributes(this.$attrs, this.componentData);
		    return h(this.getTag(), attributes, children);
		  },
		  created: function created() {
		    if (this.list !== null && this.value !== null) {
		      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
		    }

		    if (this.element !== "div") {
		      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
		    }

		    if (this.options !== undefined) {
		      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
		    }
		  },
		  mounted: function mounted() {
		    var _this3 = this;

		    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

		    if (this.noneFunctionalComponentMode && this.transitionMode) {
		      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
		    }

		    var optionsAdded = {};
		    eventsListened.forEach(function (elt) {
		      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
		    });
		    eventsToEmit.forEach(function (elt) {
		      optionsAdded["on" + elt] = emit.bind(_this3, elt);
		    });
		    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
		      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
		      return res;
		    }, {});
		    var options = Object.assign({}, this.options, attributes, optionsAdded, {
		      onMove: function onMove(evt, originalEvent) {
		        return _this3.onDragMove(evt, originalEvent);
		      }
		    });
		    !("draggable" in options) && (options.draggable = ">*");
		    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
		    this.computeIndexes();
		  },
		  beforeDestroy: function beforeDestroy() {
		    if (this._sortable !== undefined) this._sortable.destroy();
		  },
		  computed: {
		    rootContainer: function rootContainer() {
		      return this.transitionMode ? this.$el.children[0] : this.$el;
		    },
		    realList: function realList() {
		      return this.list ? this.list : this.value;
		    }
		  },
		  watch: {
		    options: {
		      handler: function handler(newOptionValue) {
		        this.updateOptions(newOptionValue);
		      },
		      deep: true
		    },
		    $attrs: {
		      handler: function handler(newOptionValue) {
		        this.updateOptions(newOptionValue);
		      },
		      deep: true
		    },
		    realList: function realList() {
		      this.computeIndexes();
		    }
		  },
		  methods: {
		    getIsFunctional: function getIsFunctional() {
		      var fnOptions = this._vnode.fnOptions;
		      return fnOptions && fnOptions.functional;
		    },
		    getTag: function getTag() {
		      return this.tag || this.element;
		    },
		    updateOptions: function updateOptions(newOptionValue) {
		      for (var property in newOptionValue) {
		        var value = Object(helper["a" /* camelize */])(property);

		        if (readonlyProperties.indexOf(value) === -1) {
		          this._sortable.option(value, newOptionValue[property]);
		        }
		      }
		    },
		    getChildrenNodes: function getChildrenNodes() {
		      if (this.noneFunctionalComponentMode) {
		        return this.$children[0].$slots.default;
		      }

		      var rawNodes = this.$slots.default;
		      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
		    },
		    computeIndexes: function computeIndexes() {
		      var _this4 = this;

		      this.$nextTick(function () {
		        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
		      });
		    },
		    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
		      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

		      if (index === -1) {
		        //Edge case during move callback: related element might be
		        //an element different from collection
		        return null;
		      }

		      var element = this.realList[index];
		      return {
		        index: index,
		        element: element
		      };
		    },
		    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
		      var vue = _ref.__vue__;

		      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
		        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
		        return vue;
		      }

		      return vue.$parent;
		    },
		    emitChanges: function emitChanges(evt) {
		      var _this5 = this;

		      this.$nextTick(function () {
		        _this5.$emit("change", evt);
		      });
		    },
		    alterList: function alterList(onList) {
		      if (this.list) {
		        onList(this.list);
		        return;
		      }

		      var newList = _toConsumableArray(this.value);

		      onList(newList);
		      this.$emit("input", newList);
		    },
		    spliceList: function spliceList() {
		      var _arguments = arguments;

		      var spliceList = function spliceList(list) {
		        return list.splice.apply(list, _toConsumableArray(_arguments));
		      };

		      this.alterList(spliceList);
		    },
		    updatePosition: function updatePosition(oldIndex, newIndex) {
		      var updatePosition = function updatePosition(list) {
		        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
		      };

		      this.alterList(updatePosition);
		    },
		    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
		      var to = _ref2.to,
		          related = _ref2.related;
		      var component = this.getUnderlyingPotencialDraggableComponent(to);

		      if (!component) {
		        return {
		          component: component
		        };
		      }

		      var list = component.realList;
		      var context = {
		        list: list,
		        component: component
		      };

		      if (to !== related && list && component.getUnderlyingVm) {
		        var destination = component.getUnderlyingVm(related);

		        if (destination) {
		          return Object.assign(destination, context);
		        }
		      }

		      return context;
		    },
		    getVmIndex: function getVmIndex(domIndex) {
		      var indexes = this.visibleIndexes;
		      var numberIndexes = indexes.length;
		      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
		    },
		    getComponent: function getComponent() {
		      return this.$slots.default[0].componentInstance;
		    },
		    resetTransitionData: function resetTransitionData(index) {
		      if (!this.noTransitionOnDrag || !this.transitionMode) {
		        return;
		      }

		      var nodes = this.getChildrenNodes();
		      nodes[index].data = null;
		      var transitionContainer = this.getComponent();
		      transitionContainer.children = [];
		      transitionContainer.kept = undefined;
		    },
		    onDragStart: function onDragStart(evt) {
		      this.context = this.getUnderlyingVm(evt.item);
		      evt.item._underlying_vm_ = this.clone(this.context.element);
		      draggingElement = evt.item;
		    },
		    onDragAdd: function onDragAdd(evt) {
		      var element = evt.item._underlying_vm_;

		      if (element === undefined) {
		        return;
		      }

		      Object(helper["d" /* removeNode */])(evt.item);
		      var newIndex = this.getVmIndex(evt.newIndex);
		      this.spliceList(newIndex, 0, element);
		      this.computeIndexes();
		      var added = {
		        element: element,
		        newIndex: newIndex
		      };
		      this.emitChanges({
		        added: added
		      });
		    },
		    onDragRemove: function onDragRemove(evt) {
		      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

		      if (evt.pullMode === "clone") {
		        Object(helper["d" /* removeNode */])(evt.clone);
		        return;
		      }

		      var oldIndex = this.context.index;
		      this.spliceList(oldIndex, 1);
		      var removed = {
		        element: this.context.element,
		        oldIndex: oldIndex
		      };
		      this.resetTransitionData(oldIndex);
		      this.emitChanges({
		        removed: removed
		      });
		    },
		    onDragUpdate: function onDragUpdate(evt) {
		      Object(helper["d" /* removeNode */])(evt.item);
		      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
		      var oldIndex = this.context.index;
		      var newIndex = this.getVmIndex(evt.newIndex);
		      this.updatePosition(oldIndex, newIndex);
		      var moved = {
		        element: this.context.element,
		        oldIndex: oldIndex,
		        newIndex: newIndex
		      };
		      this.emitChanges({
		        moved: moved
		      });
		    },
		    updateProperty: function updateProperty(evt, propertyName) {
		      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
		    },
		    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
		      if (!relatedContext.element) {
		        return 0;
		      }

		      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
		        return el.style["display"] !== "none";
		      });

		      var currentDOMIndex = domChildren.indexOf(evt.related);
		      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
		      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
		      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
		    },
		    onDragMove: function onDragMove(evt, originalEvent) {
		      var onMove = this.move;

		      if (!onMove || !this.realList) {
		        return true;
		      }

		      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
		      var draggedContext = this.context;
		      var futureIndex = this.computeFutureIndex(relatedContext, evt);
		      Object.assign(draggedContext, {
		        futureIndex: futureIndex
		      });
		      var sendEvt = Object.assign({}, evt, {
		        relatedContext: relatedContext,
		        draggedContext: draggedContext
		      });
		      return onMove(sendEvt, originalEvent);
		    },
		    onDragEnd: function onDragEnd() {
		      this.computeIndexes();
		      draggingElement = null;
		    }
		  }
		};

		if (typeof window !== "undefined" && "Vue" in window) {
		  window.Vue.component("draggable", draggableComponent);
		}

		/* harmony default export */ var vuedraggable = (draggableComponent);
		// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


		/* harmony default export */ __webpack_exports__["default"] = (vuedraggable);



		/***/ })

		/******/ })["default"];
		});
		
	} (vuedraggable_umd$1));
	return vuedraggable_umd$1.exports;
}

requireVuedraggable_umd();

const {unref:_unref$1,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode$1,toDisplayString:_toDisplayString$1,normalizeClass:_normalizeClass,createVNode:_createVNode$2,createTextVNode:_createTextVNode$1,renderList:_renderList,Fragment:_Fragment,createBlock:_createBlock} = await importShared('vue');


const _hoisted_1$1 = {
  key: 0,
  class: "back-arrow-box"
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = { class: "list-results-title" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "content-list" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  key: 1,
  class: "list-items-container"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  key: 0,
  class: "select-item-form"
};

const {computed,ref} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'TaskResults',
  setup(__props) {

const taskStore = useTaskStore(); // Utilisation du store pour accéder aux données et fonctions
const { isMobile } = useIsMobile(); 

const displayResults = computed(() => {
    switch (taskStore.selectedTasksList.typeView) {
        case 'single':
            return 'list-items'
        case 'titleOnly':
            return 'list-items-title-only'
        case 'multi':
            return 'list-items'
    }
});

return (_ctx, _cache) => {
  return (_unref$1(isMobile) ? _unref$1(taskStore).showTasksListResults  : _unref$1(isMobile) === false)
    ? (_openBlock$2(), _createElementBlock$2("div", {
        key: 0,
        class: _normalizeClass(_unref$1(isMobile) ? 'list-results-mobile' : 'list-results')
      }, [
        (_unref$1(isMobile))
          ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
              _createElementVNode$2("img", {
                src: _unref$1(arrowLeft),
                alt: "Retour",
                class: "back-arrow",
                onClick: _cache[0] || (_cache[0] = $event => (_unref$1(taskStore).showTasksListResults = false))
              }, null, 8, _hoisted_2$1)
            ]))
          : _createCommentVNode$1("", true),
        _createElementVNode$2("h3", _hoisted_3$1, _toDisplayString$1(_unref$1(taskStore).selectedTasksList?.title || 'Aucune Liste de tâches sélectionnée'), 1),
        (_unref$1(taskStore).selectedTasksList)
          ? (_openBlock$2(), _createElementBlock$2("div", {
              key: 1,
              class: _normalizeClass(_unref$1(isMobile) ? 'header-option-mobile' : 'header-option')
            }, [
              _createElementVNode$2("img", {
                src: _unref$1(singleSquareDark),
                alt: "voir un élément de la liste à la fois",
                class: "option-icon icon-left",
                onClick: _cache[1] || (_cache[1] = $event => {_unref$1(taskStore).selectedTasksList.typeView = 'single'; _unref$1(taskStore).updateTasksListTypeView(_unref$1(taskStore).selectedTasksList._id, 'single');})
              }, null, 8, _hoisted_4$1),
              _createElementVNode$2("img", {
                src: _unref$1(multiSquareDark),
                alt: "voir plusieurs éléments de la liste",
                class: "option-icon icon-center",
                onClick: _cache[2] || (_cache[2] = $event => {_unref$1(taskStore).selectedTasksList.typeView = 'multi'; _unref$1(taskStore).updateTasksListTypeView(_unref$1(taskStore).selectedTasksList._id, 'multi');})
              }, null, 8, _hoisted_5$1),
              _createElementVNode$2("img", {
                src: _unref$1(titleOnly),
                alt: "voir uniquement le titre de la liste",
                class: "option-icon icon-right",
                onClick: _cache[3] || (_cache[3] = $event => {_unref$1(taskStore).selectedTasksList.typeView = 'titleOnly'; _unref$1(taskStore).updateTasksListTypeView(_unref$1(taskStore).selectedTasksList._id, 'titleOnly');})
              }, null, 8, _hoisted_6)
            ], 2))
          : _createCommentVNode$1("", true),
        _createVNode$2(StarBar, { class: "mobile-star-bar" }),
        _createElementVNode$2("div", _hoisted_7, [
          (!_unref$1(taskStore).selectedTasksList)
            ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_8, _cache[6] || (_cache[6] = [
                _createTextVNode$1("Choississez une liste dans la barre latérale pour afficher ses résultats. "),
                _createElementVNode$2("br", null, null, -1),
                _createTextVNode$1("Ou créez une nouvelle liste pour commencer à ajouter des éléments. "),
                _createElementVNode$2("br", null, null, -1),
                _createElementVNode$2("span", { class: "yellow-heart" }, "💛", -1)
              ])))
            : (_openBlock$2(), _createElementBlock$2("div", _hoisted_9, [
                _createElementVNode$2("div", {
                  class: _normalizeClass(displayResults.value)
                }, [
                  (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref$1(taskStore).selectedTasksList.items, (item, index) => {
                    return (_openBlock$2(), _createBlock(Result, {
                      key: item._id,
                      item: item
                    }, null, 8, ["item"]))
                  }), 128))
                ], 2),
                _createElementVNode$2("button", {
                  onClick: _cache[4] || (_cache[4] = $event => (_unref$1(taskStore).showTasksListSelection = true)),
                  class: "add-entry-box"
                }, [
                  _createElementVNode$2("img", {
                    src: _unref$1(plusWhite),
                    alt: "Ajouter une tâche",
                    class: "add-entry"
                  }, null, 8, _hoisted_10)
                ]),
                (_unref$1(taskStore).showTasksListSelection)
                  ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_11, [
                      (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref$1(taskStore).accordingToType, (item, index) => {
                        return (_openBlock$2(), _createBlock(CategoryTasks, {
                          key: index,
                          item: item,
                          class: "select-item-box"
                        }, null, 8, ["item"]))
                      }), 128)),
                      _createElementVNode$2("button", {
                        class: "primary-button ending-button",
                        onClick: _cache[5] || (_cache[5] = $event => (_unref$1(taskStore).showTasksListSelection = false))
                      }, "J'ai fini !")
                    ]))
                  : _createCommentVNode$1("", true)
              ]))
        ])
      ], 2))
    : _createCommentVNode$1("", true)
}
}

};
const TaskResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-dbad1e0d"]]);

const {createVNode:_createVNode$1,unref:_unref,createElementVNode:_createElementVNode$1,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,withModifiers:_withModifiers,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');


const _hoisted_1 = { class: "task-view" };
const _hoisted_2 = { class: "to-delete-name" };
const _hoisted_3 = { class: "buttons" };
const _hoisted_4 = { class: "to-delete-name" };
const _hoisted_5 = { class: "buttons" };

const _sfc_main = {
  __name: 'TaskView',
  setup(__props) {

const taskStore = useTaskStore();


return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
    _createVNode$1(Sidebar),
    _createVNode$1(TaskResults),
    (_unref(taskStore).showDeleteConfirmationTasksList || _unref(taskStore).showDeleteConfirmationTask)
      ? (_openBlock$1(), _createElementBlock$1("div", {
          key: 0,
          class: "background-deletion",
          onClick: _cache[6] || (_cache[6] = $event => (_ctx.goback($event)))
        }, [
          (_unref(taskStore).showDeleteConfirmationTasksList)
            ? (_openBlock$1(), _createElementBlock$1("div", {
                key: 0,
                class: "pop-up-delete",
                onClick: _cache[2] || (_cache[2] = _withModifiers(() => {}, ["stop"]))
              }, [
                _createElementVNode$1("p", null, [
                  _cache[7] || (_cache[7] = _createTextVNode("Supprimer ")),
                  _cache[8] || (_cache[8] = _createElementVNode$1("br", null, null, -1)),
                  _cache[9] || (_cache[9] = _createTextVNode()),
                  _createElementVNode$1("span", _hoisted_2, _toDisplayString(_unref(taskStore).toDeleteName), 1),
                  _cache[10] || (_cache[10] = _createTextVNode(" ?"))
                ]),
                _createElementVNode$1("div", _hoisted_3, [
                  _createElementVNode$1("button", {
                    class: "danger-button",
                    onClick: _cache[0] || (_cache[0] = $event => ( _unref(taskStore).deleteTasksList(_unref(taskStore).toDeleteId)))
                  }, "Oui"),
                  _createElementVNode$1("button", {
                    class: "cancel",
                    onClick: _cache[1] || (_cache[1] = $event => (_unref(taskStore).showDeleteConfirmationTasksList = false))
                  }, "Non")
                ])
              ]))
            : _createCommentVNode("", true),
          (_unref(taskStore).showDeleteConfirmationTask)
            ? (_openBlock$1(), _createElementBlock$1("div", {
                key: 1,
                class: "pop-up-delete",
                onClick: _cache[5] || (_cache[5] = _withModifiers(() => {}, ["stop"]))
              }, [
                _createElementVNode$1("p", null, [
                  _cache[11] || (_cache[11] = _createTextVNode("Supprimer ")),
                  _cache[12] || (_cache[12] = _createElementVNode$1("br", null, null, -1)),
                  _cache[13] || (_cache[13] = _createTextVNode()),
                  _createElementVNode$1("span", _hoisted_4, _toDisplayString(_unref(taskStore).toDeleteName), 1),
                  _cache[14] || (_cache[14] = _createTextVNode(" ?"))
                ]),
                _createElementVNode$1("div", _hoisted_5, [
                  _createElementVNode$1("button", {
                    class: "danger-button",
                    onClick: _cache[3] || (_cache[3] = $event => ( _unref(taskStore).deleteTask(_unref(taskStore).toDeleteId)))
                  }, "Oui"),
                  _createElementVNode$1("button", {
                    class: "cancel",
                    onClick: _cache[4] || (_cache[4] = $event => (_unref(taskStore).showDeleteConfirmationTask = false))
                  }, "Non")
                ])
              ]))
            : _createCommentVNode("", true)
        ]))
      : _createCommentVNode("", true)
  ]))
}
}

};
const TaskView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-752cb9d5"]]);

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');
function createMyApp(Component, el) {
  const app = createApp(Component);
  const pinia = createPinia();
  app.use(pinia);
  app.mount(el);
}
function mount(el) {
  if (!el) {
    console.error("❌ container manquant");
    return;
  }
  el.innerHTML = "";
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.minHeight = "0";
  container.style.flex = "1";
  el.appendChild(container);
  createMyApp(TaskView, container);
}
window.addEventListener("error", function(event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});

export { mount };

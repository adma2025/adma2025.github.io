function get_paper_by_id()
{

    paper_id = {'22': ['m1', 's1'], '26': ['m1', 's1'], '97': ['m1', 's1'], '125': ['m1', 's1'], '164': ['m1', 's1'], '122': ['m1', 's1'], 
                '20': ['m1', 's2'], '21': ['m1', 's2'], '42': ['m1', 's2'], '113': ['m1', 's2'], '126': ['m1', 's2'], '145': ['m1', 's2'], '158': ['m1', 's2'],
                '186': ['m1', 's3'], '188': ['m1', 's3'], '123': ['m1', 's3'], '116': ['m1', 's3'], '72': ['m1', 's3'], '115': ['m1', 's3'], 
                '32': ['m1', 's4'], '120': ['m1', 's4'], '175': ['m1', 's4'], '150': ['m1', 's4'], '160': ['m1', 's4'], '169': ['m1', 's4'], 
                '2': ['m1', 's5'], '5': ['m1', 's5'], '4': ['m1', 's5'], '16': ['m1', 's5'], '25': ['m1', 's5'], '29': ['m1', 's5'], '40': ['m1', 's5'], '127': ['m1', 's5'], 
                '10': ['m1', 's6'], '12': ['m1', 's6'], '147': ['m1', 's6'], '154': ['m1', 's6'], '13': ['m1', 's6'], '33': ['m1', 's6'], '100': ['m1', 's6'], '27': ['m1', 's6'], 
                '144': ['m1', 's7'], '148': ['m1', 's7'], '165': ['m1', 's7'], '170': ['m1', 's7'], '185': ['m1', 's7'], '9': ['m1', 's7'], '19': ['m1', 's7'], 
                '1': ['m2', 's8'], '28': ['m2', 's8'], '117': ['m2', 's8'], '153': ['m2', 's8'], '192': ['m2', 's8'], '44': ['m2', 's8'], 
                '7': ['m2', 's9'], '15': ['m2', 's9'], '124': ['m2', 's9'], '155': ['m2', 's9'], '167': ['m2', 's9'], '161': ['m2', 's9'], 
                '159': ['m2', 's9', 's10'], '23': ['m2', 's10'], '102': ['m2', 's10'], '141': ['m2', 's10'], '190': ['m2', 's10'], '189': ['m2', 's10'], 
                '146': ['m2', 's11'], '18': ['m2', 's11'], '83': ['m2', 's11'], '84': ['m2', 's11'], '99': ['m2', 's11'], '114': ['m2', 's11'], 173: ['m2', 's11']};

    domains = {'m1': 'Data Mining Theory', 'm2': 'Data Mining Application'};
    sessions = {'s1': ['Pattern Mining - Dr. Guangdong Bai', '1:30 P.M.', 'Monday 28/11/2022', 'Room 145'], 
                's2': ['Graph Mining - A/Prof. Guodong Long', '3:30 P.M.', 'Monday 28/11/2022', 'Room 145'], 
                's3': ['Text Mining - Dr. Miao Xu', '10:30 A.M.', 'Wednesday 30/11/2022', 'Room 145'],
                's4': ['Image, Multimedia and Time Series Data Mining - Dr. Zhi Chen', '10:30 A.M.', 'Tuesday 29/11/2022', 'Room 146'], 
                's5': ['Classification, Clustering and Recommendation - Dr. Ruihong Qiu', '1:30 P.M.', 'Tuesday 29/11/2022', 'Room 145'],
                's6': ['Multi-objective, Optimization, Augmentation, and Database - Dr. Taotao Cai', '3:30 P.M.', 'Tuesday 29/11/2022', 'Room 145'], 
                's7': ['Data Mining Theory - Dr. Lin Yue', '10:30 A.M.', 'Tuesday 29/11/2022', 'Room 145'], 
                's8': ['Finance and Healthcare - Prof. Xue Li / Prof. Gong Hao', '10:30 A.M.', 'Wednesday 30/11/2022', 'Room 146'], 
                's9': ['Web and IoT Applications - Assoc. Prof. Jianxin Li', '1:30 P.M.', 'Wednesday 30/11/2022', 'Room 145'], 
                's10': ['On-device Application - Dr. Tony Weitong Chen', '3:30 P.M.', 'Wednesday 30/11/2022', 'Room 145'],
                's11': ['Data Mining Application - A/Prof. Hongzhi Yin', '3:30 P.M.', 'Wednesday 30/11/2022', 'Room 146']};

    // sessions = {'s1': ['Pattern Mining - Dr. Guangdong Bai', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'], 
    //             's2': ['Graph Mining - Dr. Tam Nguyen', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'], 
    //             's3': ['Text Mining - Dr. Miao Xu', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'],
    //             's4': ['Image, Multimedia and Time Series Data Mining - Dr. Sen Wang', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 146'], 
    //             's5': ['Classification, Clustering and Recommendation - Assoc. Prof. Guodong Long', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'],
    //             's6': ['Multi-objective, Optimization, Augmentation, and Database - Dr. Taotao Cai', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'], 
    //             's7': ['Data Mining Theory - Dr. Lin Yue', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'], 
    //             's8': ['Finance and Healthcare - Prof. Xue Li', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 146'], 
    //             's9': ['Web and IoT Applications - Assoc. Prof. Jiaxin Li', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'], 
    //             's10': ['On-device Application - Dr. Tony Chen', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 145'],
    //             's11': ['Data Mining Application - Prof. Ji Zhang', '<i style = "color: grey;">TBA</i>', '<i style = "color: grey;">TBA</i>', 'Room 146']};

    orders = {'22': 1, '26': 2, '97': 3, '125': 4, '164': 5, '122': 6, 
              '20': 1, '21': 2, '42': 3, '113': 4, '126': 5, '145': 6, '158': 7,
              '186': 1, '188': 2, '123': 3, '116': 4, '72': 5, '115': 6, 
              '32': 1, '120': 2, '175': 3, '150': 4, '160': 5, '169': 6, 
              '2': 1, '5': 2, '4': 3, '16': 4, '25': 5, '29': 6, '40': 7, '127': 8, 
              '10': 1, '12': 2, '147': 3, '154': 4, '13': 5, '33': 6, '100': 7, '27': 8, 
              '144': 1, '148': 2, '165': 3, '170': 4, '185': 5, '9': 6, '19': 7,
              '1': 1, '28': 2, '117': 3, '153': 4, '192': 5, '44': 6, 
              '7': 1, '15': 2, '124': 3, '155': 4, '167': 5, '161': 6, '159': 7, 
              '23': 2, '102': 3, '141': 4, '190': 5, '189': 6, 
              '146': 1, '18': 2, '83': 3, '84': 4, '99': 5, '114': 6, 173: 7};

    id = document.getElementById('pid').value;
    search_box = document.getElementById('pid');
    search_box.value = '';

    if (id == 'all')
    {
        element = document.getElementById('info');
        element.className = 'j_table_not_display';
        Previous_s2 = document.getElementById('previous_s2');
        Previous_s2.innerHTML = 'all';
        paper_ids = Object.keys(paper_id);
        paper_ids.push('159_1');
        ms = ['m1', 'm2'];
        ss = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'];
        for (var i = 0; i < paper_ids.length; i++)
        {
            element = document.getElementById('p' + paper_ids[i]);
            element.className = '';
        }
        for (var i = 0; i < ms.length; i++)
        {
            element = document.getElementById(ms[i]);
            element.className = 'pt-1 mb-2 font-titleFont text-l text-mainPurple font-extrabold';
        }
        for (var i = 0; i < ss.length; i++)
        {
            element = document.getElementById(ss[i]);
            element.className = 'mb-2 font-titleFont text-l text-mainPurple font-extrabold';
        }
        return;
    }

    if (Object.keys(paper_id).includes(id))
    {
        element = document.getElementById('info_tb');
        element.className = '';
        Previous_pid = document.getElementById('previous_pid');
        previous_pid = Previous_pid.innerHTML;
        Previous_m = document.getElementById('previous_m');
        previous_m = Previous_m.innerHTML;
        Previous_s = document.getElementById('previous_s');
        previous_s = Previous_s.innerHTML;
        Previous_s2 = document.getElementById('previous_s2');
        previous_s2 = Previous_s2.innerHTML;

        if (previous_pid != 'N')
        {
            element = document.getElementById(previous_pid);
            element.className += ' j_table_not_display';
            Previous_pid.innerHTML = 'N';
        }
        if (previous_m != 'N')
        {
            element = document.getElementById(previous_m);
            element.className += ' j_table_not_display';
            Previous_m.innerHTML = 'N';
        }
        if (previous_s != 'N')
        {
            element = document.getElementById(previous_s);
            element.className += ' j_table_not_display';
            element = document.getElementById(previous_s + '_table');
            element.className = 'j_program_table_column_other j_bt j_br j_session_color';
            Previous_s.innerHTML = 'N';
        }
        if (previous_s2 != 'N')
        {
            if (previous_s2 == 'all')
            {
                paper_ids = Object.keys(paper_id);
                paper_ids.push('159_1');
                ms = ['m1', 'm2'];
                ss = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'];
                for (var i = 0; i < paper_ids.length; i++)
                {
                    element = document.getElementById('p' + paper_ids[i]);
                    element.className = 'j_table_not_display';
                }
                for (var i = 0; i < ms.length; i++)
                {
                    element = document.getElementById(ms[i]);
                    element.className = 'pt-1 mb-2 font-titleFont text-l text-mainPurple font-extrabold j_table_not_display';
                }
                for (var i = 0; i < ss.length; i++)
                {
                    element = document.getElementById(ss[i]);
                    element.className = 'mb-2 font-titleFont text-l text-mainPurple font-extrabold j_table_not_display';
                }
            }
            else
            {
                element = document.getElementById('info_1');
                element.className = 'j_table_not_display';
                element = document.getElementById('p159_1');
                element.className += ' j_table_not_display';
                element = document.getElementById(previous_s2);
                element.className += ' j_table_not_display';
                element = document.getElementById(previous_s2 + '_table');
                element.className = 'j_program_table_column_other j_bt j_br j_session_color';
                Previous_s2.innerHTML = 'N';
            }
        }
        
        domain_key = paper_id[id][0];
        session_key = paper_id[id][1];
        session_info = sessions[session_key];
        order = orders[id];

        element = document.getElementById('domain');
        element.innerHTML = domains[domain_key];
        element = document.getElementById('session');
        element.innerHTML = session_info[0];
        element = document.getElementById('time');
        element.innerHTML = session_info[1];
        element = document.getElementById('date');
        element.innerHTML = session_info[2];
        element = document.getElementById('venue');
        element.innerHTML = session_info[3] + ' - Priestley Building (67)';
        element = document.getElementById('order');
        element.innerHTML = order;

        table_id = 'p' + id;
        table = document.getElementById(table_id);
        // element = document.getElementById(paper_id[id][0]);
        // element.className = 'pt-1 mb-2 font-titleFont text-l text-mainPurple font-extrabold';
        // element = document.getElementById(paper_id[id][1]);
        // element.className = 'mb-2 font-titleFont text-l text-mainPurple font-extrabold';
        table.className = '';
        box_id = paper_id[id][1] + '_table';
        element = document.getElementById(box_id);
        element.className = 'j_program_table_column_other j_bt j_br j_session_selected_color';
        Previous_pid = document.getElementById('previous_pid');
        Previous_pid.innerHTML = table_id;
        Previous_m = document.getElementById('previous_m');
        Previous_m.innerHTML = paper_id[id][0];
        Previous_s = document.getElementById('previous_s');
        Previous_s.innerHTML = paper_id[id][1];
        if (id == '159')
        {
            element = document.getElementById('info_1');
            element.className = '';
            table_2 = document.getElementById(table_id + '_1');
            // element = document.getElementById(paper_id[id][2]);
            // element.className = 'mb-2 font-titleFont text-l text-mainPurple font-extrabold';
            table_2.className = '';
            box_id = paper_id[id][2] + '_table';
            element = document.getElementById(box_id);
            element.className = 'j_program_table_column_other j_bt j_br j_session_selected_color';
            Previous_s2 = document.getElementById('previous_s2');
            Previous_s2.innerHTML = paper_id[id][2];
        }
    }
    else
    {
        alert ('Sorry. Cannot find any information about paper with ID ' + String(id) + '.');
    }
}

function show_pop_up_window(id, mode = 0)
{
    var window_default_height = {'pop_up_s1': 320, 'pop_up_s2': 372, 'pop_up_s3': 296,
                                 'pop_up_s4': 368, 'pop_up_s5': 376, 'pop_up_s6': 400,
                                 'pop_up_s7': 396, 'pop_up_s8': 392, 'pop_up_s9': 372,
                                 'pop_up_s10': 320, 'pop_up_s11': 324};

    var window_default_width = {'pop_up_s1': 650, 'pop_up_s2': 650, 'pop_up_s3': 650,
                                 'pop_up_s4': 650, 'pop_up_s5': 650, 'pop_up_s6': 650,
                                 'pop_up_s7': 650, 'pop_up_s8': 650, 'pop_up_s9': 650,
                                 'pop_up_s10': 650, 'pop_up_s11': 650}
    var pop_up = document.getElementById(id);
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;
    var mouse_x = 0;
    var mouse_y = 0;
    var indipendent_x = 0;
    var indipendent_y = 0;
    var pop_up_width = pop_up.clientWidth;
    var pop_up_height = pop_up.clientHeight;
    var event = event || window.event;
    indipendent_x = event.screenX;
    indipendent_y = event.screenY;

    if (event.pageX || event.pageY)
    {
        mouse_x = event.pageX;
        mouse_y = event.pageY;
    }
    else if (event.clientX || event.clientY)
    {
        mouse_x = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
        mouse_y = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
    }
    // have enough place on right
    if (mouse_x < screen_width / 2)
    {
        pop_up.style.left = (mouse_x + 10) + 'px';
        if (mode == 0)
        {
            if (screen_height - mouse_y + document.documentElement.scrollTop + document.body.scrollTop - 10 >= window_default_height[id])
            {
                pop_up.style.top = (mouse_y + 10) + 'px';
            }
            else
            {
                pop_up.style.top = (screen_height - pop_up_height + document.documentElement.scrollTop + document.body.scrollTop) + 'px';
            }
        }
        if (mode == 1)
        {
            if (screen_height - mouse_y + document.documentElement.scrollTop + document.body.scrollTop - 10 >= pop_up_height)
            {
                pop_up.style.top = (mouse_y + 10) + 'px';
            }
            else
            {
                pop_up.style.top = (screen_height - pop_up_height + document.documentElement.scrollTop + document.body.scrollTop) + 'px';
            }
        }
            
    }
    // not enough place on right
    else
    {
        pop_up.style.left = (mouse_x - 10 - window_default_width[id]) + 'px';
        if (mode == 0)
        {
            if (screen_height - mouse_y + document.documentElement.scrollTop + document.body.scrollTop - 10 >= window_default_height[id])
            {
                pop_up.style.top = (mouse_y + 10) + 'px';
            }
            else
            {
                pop_up.style.top = (screen_height - window_default_height[id] + document.documentElement.scrollTop + document.body.scrollTop) + 'px';
            }
        }
        else
        {
            if (screen_height - mouse_y + document.documentElement.scrollTop + document.body.scrollTop - 10 >= pop_up_height)
            {
                pop_up.style.top = (mouse_y + 10) + 'px';
            }
            else
            {
                pop_up.style.top = (screen_height - pop_up_height + document.documentElement.scrollTop + document.body.scrollTop) + 'px';
            }
        }
            
    }
    pop_up.className = 'j_pop_up j_uq_color_bg';
}

function hide_pop_up_window(id)
{
    pop_up = document.getElementById(id);
    pop_up.className = 'j_table_not_display j_pop_up j_uq_color_bg';
}

function mobile_menu_shift(key)
{
    var section_1 = document.getElementById('mobile_menu_section_1');
    var section_2 = document.getElementById('mobile_menu_section_2');
    if (key == 1)
    {
        section_1.setAttribute('style', 'display: none;');
        section_2.setAttribute('style', 'visibility: visible;');
    }
    else
    {
        section_1.setAttribute('style', 'visibility: visible;');
        section_2.setAttribute('style', 'display: none;');
    }
}
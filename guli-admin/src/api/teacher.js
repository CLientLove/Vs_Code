import request from '@/utils/request'

export default {
    //带条件分页查询讲师列表
    getTeacherPageVo(current,limit, teacherQuery){
        return request({
            url: `/eduservice/teacher/getTeacherPageVo/${current}/${limit}`,
            method: 'post',
            data: teacherQuery  //转化json传递
          })
    },
    //根据id删除讲师
    delTeacher(id){
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher  //转化json传递
          }) 
    },
    //根据id查询讲师
    getTeacherById(id){
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'get'
          })
    },
    //修改讲师
    updateTeacher(teacher){
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher  //转化json传递
          }) 
    },
    
    // 查询讲师列表
    getTeacherList(){
        return request({
            url: `/eduservice/teacher`,
            method: 'get'
        })
    }


}
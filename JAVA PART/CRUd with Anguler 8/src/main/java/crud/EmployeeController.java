package crud;

import com.sun.org.apache.bcel.internal.generic.NEW;
import org.hibernate.validator.constraints.URL;
import org.hibernate.validator.internal.util.logging.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by Teshem on 1/27/2020.
 */
@RestController
public class EmployeeController {
    public static Logger log= Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);
    public EmployeeController(){
        employeeList.add(new Employee(1,"Test-1"));
        employeeList.add(new Employee(2,"Test-2"));
        employeeList.add(new Employee(3,"Test-3"));
        employeeList.add(new Employee(4,"Test-4"));
    }
    static List<Employee> employeeList=new ArrayList<>();

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee")
    protected Object getAllEmployee(){
        log.info("Employee Controller HIT");
        return employeeList;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee/{id}")
    protected Object getEmployee(@PathVariable("id") int id ){
        return employeeList.stream().filter(employee -> employee.id==id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/employee")
    protected Object addEmployee(@RequestBody Employee employee){
    System.out.println("Controller ");
        if(employeeList.stream().anyMatch(employee1 -> employee1.id==employee.id)){
            employeeList.stream().forEach(employee1 -> {
                if(employee1.id==employee.id){
                    employee1.name=employee.name;
                }
            });
            return true;
        }else{
            employee.setId(employeeList.size()+1);
            employeeList.add(employee);
            return true;
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee/delete/{id}")
    protected Object deleteEmployee(@PathVariable("id") int id ){
        employeeList=employeeList.parallelStream().filter(employee -> employee.id!=id).collect( Collectors.toList());
        return true;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/employee/upload")
    protected Object deleteEmployee(@RequestParam("files") MultipartFile[] files,@ModelAttribute("employee") Employee employee ){
        try {

            if(!files[0].isEmpty()){
                System.out.println(employee.getName());
                System.out.println(employee.getId());
                byte[] bytes = files[0].getBytes();
                String filename = files[0].getOriginalFilename();
                BufferedOutputStream stream =new BufferedOutputStream(new FileOutputStream(new File("D:/" + filename)));
                stream.write(bytes);
                stream.flush();
                stream.close();
            }
        }catch (Exception e){
            return e.getMessage();
        }
    return null;
    }
}

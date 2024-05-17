vimport javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FactorySimulation extends JFrame {
    private final Warehouse<Body> bodyWarehouse;
    private final Warehouse<Engine> engineWarehouse;
    private final Warehouse<Accessory> accessoryWarehouse;
    private final Warehouse<Car> carWarehouse;
    private final Factory factory;

    private final JLabel bodyCountLabel = new JLabel("Bodies: 0");
    private final JLabel engineCountLabel = new JLabel("Engines: 0");
    private final JLabel accessoryCountLabel = new JLabel("Accessories: 0");
    private final JLabel carCountLabel = new JLabel("Cars: 0");

    private final JSlider bodySupplierSpeed = new JSlider(100, 2000);
    private final JSlider engineSupplierSpeed = new JSlider(100, 2000);
    private final JSlider accessorySupplierSpeed = new JSlider(100, 2000);
    private final JSlider dealerSpeed = new JSlider(1000, 10000);

    private List<Supplier<Body>> bodySuppliers = new ArrayList<>();
    private List<Supplier<Engine>> engineSuppliers = new ArrayList<>();
    private List<Supplier<Accessory>> accessorySuppliers = new ArrayList<>();
    private List<Dealer> dealers = new ArrayList<>();

    public FactorySimulation(Warehouse<Body> bodyWarehouse, Warehouse<Engine> engineWarehouse,
                             Warehouse<Accessory> accessoryWarehouse, Warehouse<Car> carWarehouse,
                             Factory factory) {
        this.bodyWarehouse = bodyWarehouse;
        this.engineWarehouse = engineWarehouse;
        this.accessoryWarehouse = accessoryWarehouse;
        this.carWarehouse = carWarehouse;
        this.factory = factory;

        setTitle("Car Factory Simulation");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(6, 2));
        panel.add(bodyCountLabel);
        panel.add(engineCountLabel);
        panel.add(accessoryCountLabel);
        panel.add(carCountLabel);
        panel.add(new JLabel("Body Supplier Speed:"));
        panel.add(bodySupplierSpeed);
        panel.add(new JLabel("Engine Supplier Speed:"));
        panel.add(engineSupplierSpeed);
        panel.add(new JLabel("Accessory Supplier Speed:"));
        panel.add(accessorySupplierSpeed);
        panel.add(new JLabel("Dealer Speed:"));
        panel.add(dealerSpeed);

        add(panel);
        startSimulation();
    }

    private void startSimulation() {
        SupplierFactory<Body> bodyFactory = Body::new;
        SupplierFactory<Engine> engineFactory = Engine::new;
        SupplierFactory<Accessory> accessoryFactory = Accessory::new;

        // Suppliers
        for (int i = 0; i < Config.numSuppliers; i++) {
            Supplier<Body> bodySupplier = new Supplier<>(bodyWarehouse, bodySupplierSpeed.getValue(), bodyFactory);
            Supplier<Engine> engineSupplier = new Supplier<>(engineWarehouse, engineSupplierSpeed.getValue(), engineFactory);
            Supplier<Accessory> accessorySupplier = new Supplier<>(accessoryWarehouse, accessorySupplierSpeed.getValue(), accessoryFactory);
            bodySuppliers.add(bodySupplier);
            engineSuppliers.add(engineSupplier);
            accessorySuppliers.add(accessorySupplier);
            bodySupplier.start();
            engineSupplier.start();
            accessorySupplier.start();
        }

        // Assemblers
        for (int i = 0; i < Config.numAssemblers; i++) {
            factory.assembleCar();
        }

        // Dealers
        for (int i = 0; i < Config.numDealers; i++) {
            Dealer dealer = new Dealer(carWarehouse, dealerSpeed.getValue(), i + 1);
            dealers.add(dealer);
            dealer.start();
        }

        // Update UI
        new Timer(1000, e -> {
            bodyCountLabel.setText("Bodies: " + bodyWarehouse.getSize());
            engineCountLabel.setText("Engines: " + engineWarehouse.getSize());
            accessoryCountLabel.setText("Accessories: " + accessoryWarehouse.getSize());
            carCountLabel.setText("Cars: " + carWarehouse.getSize());
        }).start();

        // Add change listeners to sliders
        bodySupplierSpeed.addChangeListener(e -> {
            for (Supplier<Body> supplier : bodySuppliers) {
                supplier.setDelay(bodySupplierSpeed.getValue());
            }
        });

        engineSupplierSpeed.addChangeListener(e -> {
            for (Supplier<Engine> supplier : engineSuppliers) {
                supplier.setDelay(engineSupplierSpeed.getValue());
            }
        });

        accessorySupplierSpeed.addChangeListener(e -> {
            for (Supplier<Accessory> supplier : accessorySuppliers) {
                supplier.setDelay(accessorySupplierSpeed.getValue());
            }
        });

        dealerSpeed.addChangeListener(e -> {
            for (Dealer dealer : dealers) {
                dealer.setDelay(dealerSpeed.getValue());
            }
        });
    }

    public static void main(String[] args) {
        try {
            Config.loadConfig("config.properties");
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }

        Warehouse<Body> bodyWarehouse = new Warehouse<>(Config.bodyWarehouseSize);
        Warehouse<Engine> engineWarehouse = new Warehouse<>(Config.engineWarehouseSize);
        Warehouse<Accessory> accessoryWarehouse = new Warehouse<>(Config.accessoryWarehouseSize);
        Warehouse<Car> carWarehouse = new Warehouse<>(Config.carWarehouseSize);

        Factory factory = new Factory(bodyWarehouse, engineWarehouse, accessoryWarehouse, carWarehouse, Config.numAssemblers);

        SwingUtilities.invokeLater(() -> {
            FactorySimulation simulation = new FactorySimulation(bodyWarehouse, engineWarehouse, accessoryWarehouse, carWarehouse, factory);
            simulation.setVisible(true);
        });
    }
}
